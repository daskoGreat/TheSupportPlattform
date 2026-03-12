module.exports = [
"[project]/src/app/community/community.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "activity": "community-module__Z8SrWG__activity",
  "backBtn": "community-module__Z8SrWG__backBtn",
  "card": "community-module__Z8SrWG__card",
  "cardFooter": "community-module__Z8SrWG__cardFooter",
  "cardHeader": "community-module__Z8SrWG__cardHeader",
  "cta": "community-module__Z8SrWG__cta",
  "grid": "community-module__Z8SrWG__grid",
  "header": "community-module__Z8SrWG__header",
  "hero": "community-module__Z8SrWG__hero",
  "heroContent": "community-module__Z8SrWG__heroContent",
  "iconBox": "community-module__Z8SrWG__iconBox",
  "joinBtn": "community-module__Z8SrWG__joinBtn",
  "layout": "community-module__Z8SrWG__layout",
  "list": "community-module__Z8SrWG__list",
  "logo": "community-module__Z8SrWG__logo",
  "memberCount": "community-module__Z8SrWG__memberCount",
  "searchBar": "community-module__Z8SrWG__searchBar",
  "sideCard": "community-module__Z8SrWG__sideCard",
  "sideCardBranded": "community-module__Z8SrWG__sideCardBranded",
  "sidebar": "community-module__Z8SrWG__sidebar",
  "wrapper": "community-module__Z8SrWG__wrapper",
});
}),
"[project]/src/lib/data/sample-coaches.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SAMPLE_COACHES",
    ()=>SAMPLE_COACHES
]);
const SAMPLE_COACHES = [
    {
        id: '1',
        name: 'Sarah Chen',
        title: 'Stress & Burnout Specialist',
        shortIntro: 'Helping high-achievers find balance and reclaim their energy.',
        longBio: 'Sarah has over 10 years of experience helping professionals navigate high-pressure environments. Her approach is grounding, practical, and deeply supportive.',
        expertise: [
            'Burnout',
            'Stress Management',
            'Career Transitions',
            'Mindfulness'
        ],
        languages: [
            'English',
            'Mandarin'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
        availability: 'Available this Thursday'
    },
    {
        id: '2',
        name: 'Marcus Thorne',
        title: 'Relationship & Communication Coach',
        shortIntro: 'Specialized in helping individuals and couples build deeper connections.',
        longBio: 'Marcus focuses on communication patterns and emotional intelligence. He provides a safe, non-judgmental space to explore relational challenges.',
        expertise: [
            'Relationships',
            'Communication',
            'Conflict Resolution',
            'Emotional Intelligence'
        ],
        languages: [
            'English',
            'Spanish'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        availability: 'Available tomorrow'
    },
    {
        id: '3',
        name: 'Elena Rodriguez',
        title: 'Confidence & Self-Esteem Guide',
        shortIntro: 'Empowering you to step into your full potential with kindness.',
        longBio: 'Elena works with people who feel "stuck" or held back by self-doubt. Her coaching style is warm, encouraging, and focused on self-compassion.',
        expertise: [
            'Self-Esteem',
            'Confidence',
            'Personal Growth',
            'Anxiety'
        ],
        languages: [
            'English',
            'Spanish',
            'Portuguese'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        availability: 'Available today'
    },
    {
        id: '4',
        name: 'David Lindgren',
        title: 'Livscoach & Krisstöd',
        shortIntro: 'Navigerar livets stora förändringar med stadigt stöd.',
        longBio: 'David specialiserar sig på att stötta dem som går igenom stora livsförändringar—oavsett om det är en ny karriär, en förlust eller en flytt. Han erbjuder en lugn och grundad närvaro.',
        expertise: [
            'Sorg',
            'Förlust',
            'Livsförändringar',
            'Resiliens'
        ],
        languages: [
            'Svenska',
            'Engelska'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
        availability: 'Tillgänglig måndag'
    },
    {
        id: '5',
        name: 'Anna Bergström',
        title: 'Stresscoach & Samtalsterapeut',
        shortIntro: 'Hjälper dig att återfå lugnet i en stressig vardag.',
        longBio: 'Anna har lång erfarenhet av utmattningssyndrom och arbetsrelaterad stress. Hon arbetar mycket med gränssättning och återhämtning.',
        expertise: [
            'Stress',
            'Utmattning',
            'Arbetsliv',
            'Gränssättning'
        ],
        languages: [
            'Svenska'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
        availability: 'Tillgänglig idag'
    },
    {
        id: '6',
        name: 'Johan Nilsson',
        title: 'Relationsexpert & Medlare',
        shortIntro: 'Fokus på hälsosamma relationer och kommunikation.',
        longBio: 'Johan hjälper individer och par att förstå sina kommunikationsmönster. Han är expert på konflikthantering och att bygga tillit.',
        expertise: [
            'Relationer',
            'Kommunikation',
            'Konflikter',
            'Självinsikt'
        ],
        languages: [
            'Svenska',
            'Engelska'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        availability: 'Lediga tider imorgon'
    }
];
}),
"[project]/src/lib/matching/engine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_COMMUNITIES",
    ()=>MOCK_COMMUNITIES,
    "matchCoaches",
    ()=>matchCoaches
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$sample$2d$coaches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/sample-coaches.ts [app-ssr] (ecmascript)");
;
const MOCK_COMMUNITIES = [
    {
        id: 'c1',
        title: 'Stress och återhämtning',
        description: 'En trygg grupp för dig som kämpar med stress och behöver verktyg för vila.',
        members: '1.2k',
        activity: 'Hög aktivitet idag'
    },
    {
        id: 'c2',
        title: 'Livsförändringar',
        description: 'Stöd när livet tar en ny vändning. Dela erfarenheter och hitta styrka.',
        members: '850',
        activity: 'Aktiv'
    },
    {
        id: 'c3',
        title: 'Föräldrastöd',
        description: 'För dig som navigerar föräldraskapets utmaningar och glädjeämnen.',
        members: '2.1k',
        activity: 'Nya inlägg'
    },
    {
        id: 'c4',
        title: 'Arbete och press',
        description: 'Diskussioner kring hälsa och välmående i arbetslivet.',
        members: '640',
        activity: 'Stabil'
    },
    {
        id: 'c5',
        title: 'Relationer',
        description: 'Hitta perspektiv på kärlek, vänskap och familjedynamik.',
        members: '1.5k',
        activity: 'Hög aktivitet'
    },
    {
        id: 'c6',
        title: 'Ensamhet och stöd',
        description: 'Du är inte ensam. Här hittar vi gemenskap tillsammans.',
        members: '920',
        activity: 'Varm gemenskap'
    }
];
function matchCoaches(userInput) {
    const lowerInput = userInput.toLowerCase();
    const coachMatches = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$sample$2d$coaches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAMPLE_COACHES"].map((coach)=>{
        let score = 0;
        const categories = {
            burnout: {
                ids: [
                    '1',
                    '5'
                ],
                words: [
                    'trött',
                    'utmattad',
                    'stress',
                    'utbränd',
                    'väggen',
                    'exhausted',
                    'tired',
                    'work'
                ]
            },
            relationship: {
                ids: [
                    '2',
                    '6'
                ],
                words: [
                    'relation',
                    'partner',
                    'separerad',
                    'bråk',
                    'separera',
                    'skilsmässa',
                    'kärlek',
                    'love',
                    'conflict'
                ]
            },
            growth: {
                ids: [
                    '3',
                    '5'
                ],
                words: [
                    'självbild',
                    'självförtroende',
                    'stuck',
                    'fast',
                    'growth',
                    'psykisk hälsa',
                    'confidence'
                ]
            },
            transition: {
                ids: [
                    '4'
                ],
                words: [
                    'förändring',
                    'change',
                    'grief',
                    'sorg',
                    'nytt jobb',
                    'loss',
                    'flytt'
                ]
            }
        };
        if (categories.burnout.words.some((word)=>lowerInput.includes(word)) && categories.burnout.ids.includes(coach.id)) score += 1;
        if (categories.relationship.words.some((word)=>lowerInput.includes(word)) && categories.relationship.ids.includes(coach.id)) score += 1;
        if (categories.growth.words.some((word)=>lowerInput.includes(word)) && categories.growth.ids.includes(coach.id)) score += 1;
        if (categories.transition.words.some((word)=>lowerInput.includes(word)) && categories.transition.ids.includes(coach.id)) score += 1;
        coach.expertise.forEach((skill)=>{
            if (lowerInput.includes(skill.toLowerCase())) score += 0.5;
        });
        return {
            coach,
            score
        };
    });
    const matchedCoaches = coachMatches.sort((a, b)=>b.score - a.score).filter((m)=>m.score > 0).slice(0, 3).map((m)=>({
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
    const matchedCommunities = MOCK_COMMUNITIES.filter((c)=>{
        const title = c.title.toLowerCase();
        const desc = c.description.toLowerCase();
        return lowerInput.split(' ').some((word)=>word.length > 3 && (title.includes(word) || desc.includes(word)));
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
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/src/app/community/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommunityPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/community/community.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$matching$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/matching/engine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function CommunityPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.back(),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backBtn,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/community/page.tsx",
                                        lineNumber: 17,
                                        columnNumber: 90
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/community/page.tsx",
                                    lineNumber: 17,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                                    children: "Community"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/community/page.tsx",
                                    lineNumber: 18,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/community/page.tsx",
                            lineNumber: 16,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchBar,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/community/page.tsx",
                                    lineNumber: 21,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Sök grupper eller ämnen..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/community/page.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/community/page.tsx",
                            lineNumber: 20,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/community/page.tsx",
                    lineNumber: 15,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/community/page.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container section-padding",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroContent,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Hitta din gemenskap"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/community/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Du är inte ensam. Här kan du dela erfarenheter och hitta stöd hos andra i liknande situationer."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/community/page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/community/page.tsx",
                            lineNumber: 29,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/community/page.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].layout,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mainContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Populära grupper"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/community/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$matching$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_COMMUNITIES"].map((comm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardHeader,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconBox,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                    size: 24
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/community/page.tsx",
                                                                    lineNumber: 42,
                                                                    columnNumber: 73
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/community/page.tsx",
                                                                lineNumber: 42,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].memberCount,
                                                                children: [
                                                                    comm.members,
                                                                    " medlemmar"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/community/page.tsx",
                                                                lineNumber: 43,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/community/page.tsx",
                                                        lineNumber: 41,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        children: comm.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/community/page.tsx",
                                                        lineNumber: 45,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: comm.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/community/page.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardFooter,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activity,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/community/page.tsx",
                                                                        lineNumber: 48,
                                                                        columnNumber: 75
                                                                    }, this),
                                                                    " ",
                                                                    comm.activity
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/community/page.tsx",
                                                                lineNumber: 48,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].joinBtn,
                                                                children: "Gå med"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/community/page.tsx",
                                                                lineNumber: 49,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/community/page.tsx",
                                                        lineNumber: 47,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, comm.id, true, {
                                                fileName: "[project]/src/app/community/page.tsx",
                                                lineNumber: 40,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/community/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/community/page.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebar,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sideCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: "Nya diskussioner"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/community/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].list,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/community/page.tsx",
                                                                lineNumber: 61,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: "Hur hanterar ni morgonångest?"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/community/page.tsx",
                                                                        lineNumber: 63,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "I Stress & återhämtning"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/community/page.tsx",
                                                                        lineNumber: 64,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/community/page.tsx",
                                                                lineNumber: 62,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/community/page.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/community/page.tsx",
                                                                lineNumber: 68,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: "Tips på bra böcker om sorg?"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/community/page.tsx",
                                                                        lineNumber: 70,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "I Livsförändringar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/community/page.tsx",
                                                                        lineNumber: 71,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/community/page.tsx",
                                                                lineNumber: 69,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/community/page.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/community/page.tsx",
                                                lineNumber: 59,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/community/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sideCardBranded,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/branding/heart.png",
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/community/page.tsx",
                                                lineNumber: 78,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: "Behöver du prata med någon direkt?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/community/page.tsx",
                                                lineNumber: 79,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Våra coacher finns här för dig."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/community/page.tsx",
                                                lineNumber: 80,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/intake",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$community$2f$community$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cta,
                                                children: "Hitta en coach"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/community/page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/community/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/community/page.tsx",
                                lineNumber: 56,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/community/page.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/community/page.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/community/page.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b24b71e6._.js.map