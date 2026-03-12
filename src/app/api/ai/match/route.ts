import { matchCoaches } from '@/lib/matching/engine';

export async function POST(req: Request) {
    try {
        const { userInput } = await req.json();
        const result = matchCoaches(userInput);
        return Response.json(result);
    } catch (e) {
        return Response.json({
            message: "Jag har hittat coacher som kan passa dig.",
            coaches: []
        }, { status: 500 });
    }
}
