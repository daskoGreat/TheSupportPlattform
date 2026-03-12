export interface Coach {
    id: string;
    name: string;
    title: string;
    shortIntro: string;
    longBio: string;
    expertise: string[];
    languages: string[];
    imageUrl: string;
    availability: string;
}

export const SAMPLE_COACHES: Coach[] = [
    {
        id: '1',
        name: 'Sarah Chen',
        title: 'Stress & Burnout Specialist',
        shortIntro: 'Helping high-achievers find balance and reclaim their energy.',
        longBio: 'Sarah has over 10 years of experience helping professionals navigate high-pressure environments. Her approach is grounding, practical, and deeply supportive.',
        expertise: ['Burnout', 'Stress Management', 'Career Transitions', 'Mindfulness'],
        languages: ['English', 'Mandarin'],
        imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
        availability: 'Available this Thursday'
    },
    {
        id: '2',
        name: 'Marcus Thorne',
        title: 'Relationship & Communication Coach',
        shortIntro: 'Specialized in helping individuals and couples build deeper connections.',
        longBio: 'Marcus focuses on communication patterns and emotional intelligence. He provides a safe, non-judgmental space to explore relational challenges.',
        expertise: ['Relationships', 'Communication', 'Conflict Resolution', 'Emotional Intelligence'],
        languages: ['English', 'Spanish'],
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        availability: 'Available tomorrow'
    },
    {
        id: '3',
        name: 'Elena Rodriguez',
        title: 'Confidence & Self-Esteem Guide',
        shortIntro: 'Empowering you to step into your full potential with kindness.',
        longBio: 'Elena works with people who feel "stuck" or held back by self-doubt. Her coaching style is warm, encouraging, and focused on self-compassion.',
        expertise: ['Self-Esteem', 'Confidence', 'Personal Growth', 'Anxiety'],
        languages: ['English', 'Spanish', 'Portuguese'],
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        availability: 'Available today'
    },
    {
        id: '4',
        name: 'David Lindgren',
        title: 'Livscoach & Krisstöd',
        shortIntro: 'Navigerar livets stora förändringar med stadigt stöd.',
        longBio: 'David specialiserar sig på att stötta dem som går igenom stora livsförändringar—oavsett om det är en ny karriär, en förlust eller en flytt. Han erbjuder en lugn och grundad närvaro.',
        expertise: ['Sorg', 'Förlust', 'Livsförändringar', 'Resiliens'],
        languages: ['Svenska', 'Engelska'],
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
        availability: 'Tillgänglig måndag'
    },
    {
        id: '5',
        name: 'Anna Bergström',
        title: 'Stresscoach & Samtalsterapeut',
        shortIntro: 'Hjälper dig att återfå lugnet i en stressig vardag.',
        longBio: 'Anna har lång erfarenhet av utmattningssyndrom och arbetsrelaterad stress. Hon arbetar mycket med gränssättning och återhämtning.',
        expertise: ['Stress', 'Utmattning', 'Arbetsliv', 'Gränssättning'],
        languages: ['Svenska'],
        imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
        availability: 'Tillgänglig idag'
    },
    {
        id: '6',
        name: 'Johan Nilsson',
        title: 'Relationsexpert & Medlare',
        shortIntro: 'Fokus på hälsosamma relationer och kommunikation.',
        longBio: 'Johan hjälper individer och par att förstå sina kommunikationsmönster. Han är expert på konflikthantering och att bygga tillit.',
        expertise: ['Relationer', 'Kommunikation', 'Konflikter', 'Självinsikt'],
        languages: ['Svenska', 'Engelska'],
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        availability: 'Lediga tider imorgon'
    }
];
