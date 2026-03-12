import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getResources } from "@/i18n/resources";
import type { Locale } from "@/i18n/types";
import { getNestedValue } from "@/i18n/utils";

export async function GET() {
    const session = await auth();

    if (!session?.user?.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const userId = session.user.id;

    if ((session.user as any).role !== "COACH") {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            name: true,
            image: true,
        },
    });

    const coachProfile = await prisma.coachProfile.findUnique({
        where: { userId: userId },
        select: {
            id: true,
            title: true,
            shortIntro: true,
            longBio: true,
            expertise: true,
            languages: true,
            yearsOfExperience: true,
        },
    });

    return NextResponse.json({
        user,
        coachProfile,
    });
}

export async function POST(req: Request) {
    const headerLocale = (req.headers.get("x-tsn-locale") || "").toLowerCase();
    const locale: Locale =
        headerLocale.startsWith("sv") ? "sv" : headerLocale.startsWith("es") ? "es" : "en";
    const resources = getResources(locale);
    const fallback = getResources("en");
    const t = (key: string) => {
        const [ns, rest] = key.split(":") as [string, string];
        const value =
            (getNestedValue((resources as any)[ns], rest) as string | undefined) ??
            (getNestedValue((fallback as any)[ns], rest) as string | undefined) ??
            key;
        return typeof value === "string" ? value : key;
    };

    const session = await auth();

    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if ((session.user as any).role !== "COACH") {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    try {
        const body = await req.json();
        const {
            name,
            image,
            shortDescription,
            title,
            longBio,
            specialties,
            yearsOfExperience,
            languages,
        } = body;

        if (!image || !String(image).trim()) {
            return NextResponse.json(
                { error: t("coach:profile.validation.image") },
                { status: 400 }
            );
        }

        if (!name || !String(name).trim()) {
            return NextResponse.json(
                { error: t("coach:profile.validation.name") },
                { status: 400 }
            );
        }

        if (!shortDescription || !String(shortDescription).trim()) {
            return NextResponse.json(
                { error: t("coach:profile.validation.short") },
                { status: 400 }
            );
        }

        const userId = session.user.id;
        if (!userId) {
            return NextResponse.json({ error: "User ID not found in session" }, { status: 400 });
        }

        await prisma.user.update({
            where: { id: userId },
            data: {
                name,
                image,
            },
        });

        const expertiseArray: string[] =
            typeof specialties === "string"
                ? specialties
                    .split(",")
                    .map((s: string) => s.trim())
                    .filter(Boolean)
                : Array.isArray(specialties)
                    ? specialties
                    : [];

        const languagesArray: string[] =
            typeof languages === "string"
                ? languages
                    .split(",")
                    .map((s: string) => s.trim())
                    .filter(Boolean)
                : Array.isArray(languages)
                    ? languages
                    : [];

        const years =
            typeof yearsOfExperience === "number"
                ? yearsOfExperience
                : yearsOfExperience
                    ? Number(yearsOfExperience)
                    : null;

        const coachProfile = await prisma.coachProfile.upsert({
            where: { userId: userId },
            update: {
                title: title ?? "",
                shortIntro: shortDescription,
                longBio: longBio ?? "",
                expertise: expertiseArray,
                languages: languagesArray.length > 0 ? languagesArray : [t("coach:profile.defaultLanguage")],
                yearsOfExperience: years ?? 0,
                preferredModes: ["VIDEO", "PHONE"],
                isActive: true,
            },
            create: {
                userId: userId,
                title: title ?? "",
                shortIntro: shortDescription,
                longBio: longBio ?? "",
                expertise: expertiseArray,
                languages: languagesArray.length > 0 ? languagesArray : [t("coach:profile.defaultLanguage")],
                yearsOfExperience: years ?? 0,
                preferredModes: ["VIDEO", "PHONE"],
                isActive: true,
            },
        });

        return NextResponse.json({
            message: t("common:toast.profileSaved"),
            coachProfile,
        });
    } catch (error) {
        console.error("Failed to save coach profile", error);
        return NextResponse.json(
            { error: t("common:toast.actionFailed") },
            { status: 500 }
        );
    }
}

