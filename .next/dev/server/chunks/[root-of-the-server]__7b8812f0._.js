module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/lib/ai/service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocalLlamaService",
    ()=>LocalLlamaService,
    "aiService",
    ()=>aiService
]);
class LocalLlamaService {
    baseUrl;
    model;
    constructor(baseUrl = 'http://localhost:11434', model = 'llama3'){
        this.baseUrl = baseUrl;
        this.model = model;
    }
    async chat(messages) {
        const systemPrompt = {
            role: 'system',
            content: `You are a matching assistant for a coaching platform called The Support Network.
Rules:
Always respond in Swedish.
Never give advice.
Never act like a therapist.
Only respond that you have found one or more coaches that match the user's message.
Your response must be short.
Examples of correct responses:
"Jag har hittat en coach som kan passa dig."
"Jag har hittat flera coacher som kan passa dig."
Do not add extra commentary.`
        };
        const response = await fetch(`${this.baseUrl}/api/chat`, {
            method: 'POST',
            body: JSON.stringify({
                model: this.model,
                messages: [
                    systemPrompt,
                    ...messages
                ],
                stream: false
            })
        });
        const data = await response.json();
        return {
            content: data.message.content || "Jag har hittat coacher som kan passa dig."
        };
    }
    async streamChat(messages, onToken) {
        const systemPrompt = {
            role: 'system',
            content: `You are a matching assistant for a coaching platform called The Support Network.
Rules:
Always respond in Swedish.
Never give advice.
Never act like a therapist.
Only respond that you have found one or more coaches that match the user's message.
Your response must be short.
Examples of correct responses:
"Jag har hittat en coach som kan passa dig."
"Jag har hittat flera coacher som kan passa dig."
Do not add extra commentary.`
        };
        const response = await fetch(`${this.baseUrl}/api/chat`, {
            method: 'POST',
            body: JSON.stringify({
                model: this.model,
                messages: [
                    systemPrompt,
                    ...messages
                ],
                stream: true
            })
        });
        if (!response.body) return;
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        while(true){
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value, {
                stream: true
            });
            const lines = chunk.split('\n');
            for (const line of lines){
                if (!line.trim()) continue;
                try {
                    const part = JSON.parse(line);
                    if (part.message?.content) {
                        onToken(part.message.content);
                    }
                } catch (e) {
                // Ignore parse errors for incomplete chunks
                }
            }
        }
    }
    async extractNeeds(userInput) {
        const prompt = `Analyze the following support request and extract:
    1. Key problem themes
    2. Emotional tone
    3. Intensity (low, medium, high)
    4. Practical needs
    
    User says: "${userInput}"
    
    Respond in JSON format.`;
        const response = await this.chat([
            {
                role: 'user',
                content: prompt
            }
        ]);
        try {
            return JSON.parse(response.content);
        } catch (e) {
            return {
                themes: [],
                emotionalTone: 'neutral',
                intensity: 'low',
                practicalNeeds: []
            };
        }
    }
    async generateEmbedding(text) {
        const response = await fetch(`${this.baseUrl}/api/embeddings`, {
            method: 'POST',
            body: JSON.stringify({
                model: this.model,
                prompt: text
            })
        });
        const data = await response.json();
        return data.embedding;
    }
}
const aiService = new LocalLlamaService();
}),
"[project]/src/app/api/ai/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ai$2f$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ai/service.ts [app-route] (ecmascript)");
;
async function POST(req) {
    const { messages } = await req.json();
    const response = new ReadableStream({
        async start (controller) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ai$2f$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aiService"].streamChat(messages, (token)=>{
                controller.enqueue(token);
            });
            controller.close();
        }
    });
    return new Response(response);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7b8812f0._.js.map