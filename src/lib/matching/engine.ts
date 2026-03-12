import { SAMPLE_COACHES, Coach } from '@/lib/data/sample-coaches';

export interface CommunityGroup {
    id: string;
    title: string;
    description: string;
    members: string;
    activity: string;
}

export const MOCK_COMMUNITIES: CommunityGroup[] = [
    { id: 'c1', title: 'Stress och återhämtning', description: 'En trygg grupp för dig som kämpar med stress och behöver verktyg för vila.', members: '1.2k', activity: 'Hög aktivitet idag' },
    { id: 'c2', title: 'Livsförändringar', description: 'Stöd när livet tar en ny vändning. Dela erfarenheter och hitta styrka.', members: '850', activity: 'Aktiv' },
    { id: 'c3', title: 'Föräldrastöd', description: 'För dig som navigerar föräldraskapets utmaningar och glädjeämnen.', members: '2.1k', activity: 'Nya inlägg' },
    { id: 'c4', title: 'Arbete och press', description: 'Diskussioner kring hälsa och välmående i arbetslivet.', members: '640', activity: 'Stabil' },
    { id: 'c5', title: 'Relationer', description: 'Hitta perspektiv på kärlek, vänskap och familjedynamik.', members: '1.5k', activity: 'Hög aktivitet' },
    { id: 'c6', title: 'Ensamhet och stöd', description: 'Du är inte ensam. Här hittar vi gemenskap tillsammans.', members: '920', activity: 'Varm gemenskap' }
];

export interface MatchResult {
    message: string;
    coaches: {
        id: string;
        name: string;
        title: string;
        avatar: string;
        specialties: string[];
        nextAvailable: string;
        supportsVideo: boolean;
        supportsPhone: boolean;
    }[];
    communities: CommunityGroup[];
}

export function matchCoaches(userInput: string): MatchResult {
    const lowerInput = userInput.toLowerCase();

    const coachMatches = SAMPLE_COACHES.map(coach => {
        let score = 0;

        const categories = {
            burnout: { ids: ['1', '5'], words: ['trött', 'utmattad', 'stress', 'utbränd', 'väggen', 'exhausted', 'tired', 'work'] },
            relationship: { ids: ['2', '6'], words: ['relation', 'partner', 'separerad', 'bråk', 'separera', 'skilsmässa', 'kärlek', 'love', 'conflict'] },
            growth: { ids: ['3', '5'], words: ['självbild', 'självförtroende', 'stuck', 'fast', 'growth', 'psykisk hälsa', 'confidence'] },
            transition: { ids: ['4'], words: ['förändring', 'change', 'grief', 'sorg', 'nytt jobb', 'loss', 'flytt'] }
        };

        if (categories.burnout.words.some(word => lowerInput.includes(word)) && categories.burnout.ids.includes(coach.id)) score += 1;
        if (categories.relationship.words.some(word => lowerInput.includes(word)) && categories.relationship.ids.includes(coach.id)) score += 1;
        if (categories.growth.words.some(word => lowerInput.includes(word)) && categories.growth.ids.includes(coach.id)) score += 1;
        if (categories.transition.words.some(word => lowerInput.includes(word)) && categories.transition.ids.includes(coach.id)) score += 1;

        coach.expertise.forEach(skill => {
            if (lowerInput.includes(skill.toLowerCase())) score += 0.5;
        });

        return { coach, score };
    });

    const matchedCoaches = coachMatches
        .sort((a, b) => b.score - a.score)
        .filter(m => m.score > 0)
        .slice(0, 3)
        .map(m => ({
            id: m.coach.id,
            name: m.coach.name,
            title: m.coach.title,
            avatar: m.coach.imageUrl,
            specialties: m.coach.expertise,
            nextAvailable: m.coach.availability,
            supportsVideo: true,
            supportsPhone: true
        }));

    // Match communities
    const matchedCommunities = MOCK_COMMUNITIES.filter(c => {
        const title = c.title.toLowerCase();
        const desc = c.description.toLowerCase();
        return lowerInput.split(' ').some(word => word.length > 3 && (title.includes(word) || desc.includes(word)));
    }).slice(0, 3);

    // Fallback if no specific community match
    const communityResult = matchedCommunities.length > 0 ? matchedCommunities : MOCK_COMMUNITIES.slice(0, 2);

    let message = "Jag har hittat alternativ i community för dig.";
    if (matchedCoaches.length > 0) {
        message = "Jag har hittat både coacher och community-resurser som kan passa dig.";
    }

    return {
        message,
        coaches: matchedCoaches.length > 0 ? matchedCoaches : [],
        communities: communityResult
    };
}
