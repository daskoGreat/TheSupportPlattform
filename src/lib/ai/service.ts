export interface AiResponse {
    content: string;
    tokens?: number;
}

export interface AiMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

export interface ExtractionResult {
    themes: string[];
    emotionalTone: string;
    intensity: 'low' | 'medium' | 'high';
    practicalNeeds: string[];
}

export interface AiService {
    chat(messages: AiMessage[]): Promise<AiResponse>;
    streamChat(messages: AiMessage[], onToken: (token: string) => void): Promise<void>;
    extractNeeds(userInput: string): Promise<ExtractionResult>;
    generateEmbedding(text: string): Promise<number[]>;
}

/**
 * Implementation for a local Llama model via Ollama or similar local API
 */
export class LocalLlamaService implements AiService {
    private baseUrl: string;
    private model: string;

    constructor(baseUrl: string = 'http://localhost:11434', model: string = 'llama3') {
        this.baseUrl = baseUrl;
        this.model = model;
    }

    async chat(messages: AiMessage[]): Promise<AiResponse> {
        const systemPrompt: AiMessage = {
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
                messages: [systemPrompt, ...messages],
                stream: false,
            }),
        });

        const data = await response.json();
        return { content: data.message.content || "Jag har hittat coacher som kan passa dig." };
    }

    async streamChat(messages: AiMessage[], onToken: (token: string) => void): Promise<void> {
        const systemPrompt: AiMessage = {
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
                messages: [systemPrompt, ...messages],
                stream: true,
            }),
        });
        if (!response.body) return;
        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');

            for (const line of lines) {
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

    async extractNeeds(userInput: string): Promise<ExtractionResult> {
        const prompt = `Analyze the following support request and extract:
    1. Key problem themes
    2. Emotional tone
    3. Intensity (low, medium, high)
    4. Practical needs
    
    User says: "${userInput}"
    
    Respond in JSON format.`;

        const response = await this.chat([{ role: 'user', content: prompt }]);
        try {
            return JSON.parse(response.content);
        } catch (e) {
            return { themes: [], emotionalTone: 'neutral', intensity: 'low', practicalNeeds: [] };
        }
    }

    async generateEmbedding(text: string): Promise<number[]> {
        const response = await fetch(`${this.baseUrl}/api/embeddings`, {
            method: 'POST',
            body: JSON.stringify({
                model: this.model,
                prompt: text,
            }),
        });

        const data = await response.json();
        return data.embedding;
    }
}

export const aiService = new LocalLlamaService();
