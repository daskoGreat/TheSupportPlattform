import { aiService, AiMessage } from '@/lib/ai/service';

export async function POST(req: Request) {
    const { messages } = await req.json();

    const response = new ReadableStream({
        async start(controller) {
            await aiService.streamChat(messages, (token) => {
                controller.enqueue(token);
            });
            controller.close();
        },
    });

    return new Response(response);
}
