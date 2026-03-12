import type { CoachProfile, User } from "@prisma/client";

export function isCoachProfileComplete(
    user: Pick<User, "name" | "image"> | null,
    profile: Pick<CoachProfile, "shortIntro"> | null
): boolean {
    if (!user) return false;

    const hasName = !!user.name && user.name.trim().length > 0;
    const hasImage = !!user.image && user.image.trim().length > 0;
    const hasDescription = !!profile && !!profile.shortIntro && profile.shortIntro.trim().length > 0;

    return hasName && hasImage && hasDescription;
}

