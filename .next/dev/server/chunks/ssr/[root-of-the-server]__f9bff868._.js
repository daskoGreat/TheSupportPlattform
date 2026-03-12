module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/page.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "alreadyMember": "page-module___8aEwW__alreadyMember",
  "bottomLeft": "page-module___8aEwW__bottomLeft",
  "bottomRight": "page-module___8aEwW__bottomRight",
  "corner": "page-module___8aEwW__corner",
  "footerBranding": "page-module___8aEwW__footerBranding",
  "heart": "page-module___8aEwW__heart",
  "heartContainer": "page-module___8aEwW__heartContainer",
  "joinLink": "page-module___8aEwW__joinLink",
  "loginSection": "page-module___8aEwW__loginSection",
  "main": "page-module___8aEwW__main",
  "signinBtn": "page-module___8aEwW__signinBtn",
  "title": "page-module___8aEwW__title",
  "topLeft": "page-module___8aEwW__topLeft",
  "topRight": "page-module___8aEwW__topRight",
  "wrapper": "page-module___8aEwW__wrapper",
});
}),
"[project]/src/lib/data/sample-coaches.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/app/coaches/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoachesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/page.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$sample$2d$coaches$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/sample-coaches.ts [app-rsc] (ecmascript)");
;
;
;
function CoachesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container section-padding",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-center",
                children: "Our Specialized Coaches"
            }, void 0, false, {
                fileName: "[project]/src/app/coaches/page.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center",
                style: {
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--spacing-2xl)'
                },
                children: "Find the right person to support you on your journey."
            }, void 0, false, {
                fileName: "[project]/src/app/coaches/page.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].grid,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$sample$2d$coaches$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SAMPLE_COACHES"].map((coach)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].stepCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: coach.imageUrl,
                                alt: coach.name,
                                style: {
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: 'var(--spacing-md)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/coaches/page.tsx",
                                lineNumber: 15,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    marginBottom: 'var(--spacing-xs)'
                                },
                                children: coach.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/coaches/page.tsx",
                                lineNumber: 20,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'var(--accent-sage)',
                                    fontWeight: '600',
                                    fontSize: '0.9rem'
                                },
                                children: coach.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/coaches/page.tsx",
                                lineNumber: 21,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '0.9rem',
                                    color: 'var(--text-secondary)'
                                },
                                children: coach.shortIntro
                            }, void 0, false, {
                                fileName: "[project]/src/app/coaches/page.tsx",
                                lineNumber: 22,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '5px',
                                    flexWrap: 'wrap',
                                    marginTop: 'var(--spacing-md)'
                                },
                                children: coach.expertise.slice(0, 3).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            background: 'var(--accent-sage-light)',
                                            color: 'var(--accent-sage)',
                                            padding: '2px 8px',
                                            borderRadius: '12px',
                                            fontSize: '0.75rem'
                                        },
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/src/app/coaches/page.tsx",
                                        lineNumber: 25,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/coaches/page.tsx",
                                lineNumber: 23,
                                columnNumber: 25
                            }, this)
                        ]
                    }, coach.id, true, {
                        fileName: "[project]/src/app/coaches/page.tsx",
                        lineNumber: 14,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/coaches/page.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/coaches/page.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/coaches/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/coaches/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f9bff868._.js.map