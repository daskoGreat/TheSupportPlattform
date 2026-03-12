(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/context/SelectionContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectionProvider",
    ()=>SelectionProvider,
    "useSelection",
    ()=>useSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const SelectionContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function SelectionProvider({ children }) {
    _s();
    const [selectedCoach, setSelectedCoach] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectionContext.Provider, {
        value: {
            selectedCoach,
            setSelectedCoach
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/SelectionContext.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_s(SelectionProvider, "WKcNO59LxoUVpRgocseJaZXeuRw=");
_c = SelectionProvider;
function useSelection() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SelectionContext);
    if (context === undefined) {
        throw new Error('useSelection must be used within a SelectionProvider');
    }
    return context;
}
_s1(useSelection, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "SelectionProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/ToastContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ToastProvider({ children }) {
    _s();
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[showToast]": (message, type = "info")=>{
            setToasts({
                "ToastProvider.useCallback[showToast]": (prev)=>[
                        ...prev,
                        {
                            id: Date.now(),
                            message,
                            type
                        }
                    ]
            }["ToastProvider.useCallback[showToast]"]);
        }
    }["ToastProvider.useCallback[showToast]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToastProvider.useEffect": ()=>{
            if (toasts.length === 0) return;
            const timers = toasts.map({
                "ToastProvider.useEffect.timers": (toast)=>setTimeout({
                        "ToastProvider.useEffect.timers": ()=>{
                            setToasts({
                                "ToastProvider.useEffect.timers": (prev)=>prev.filter({
                                        "ToastProvider.useEffect.timers": (t)=>t.id !== toast.id
                                    }["ToastProvider.useEffect.timers"])
                            }["ToastProvider.useEffect.timers"]);
                        }
                    }["ToastProvider.useEffect.timers"], 3000)
            }["ToastProvider.useEffect.timers"]);
            return ({
                "ToastProvider.useEffect": ()=>{
                    timers.forEach({
                        "ToastProvider.useEffect": (timer)=>clearTimeout(timer)
                    }["ToastProvider.useEffect"]);
                }
            })["ToastProvider.useEffect"];
        }
    }["ToastProvider.useEffect"], [
        toasts
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: {
            showToast
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-live": "polite",
                "aria-atomic": "true",
                style: {
                    position: "fixed",
                    bottom: "24px",
                    right: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    zIndex: 60
                },
                children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            minWidth: "220px",
                            maxWidth: "320px",
                            padding: "10px 14px",
                            borderRadius: "999px",
                            backgroundColor: "rgba(15, 23, 42, 0.96)",
                            border: "1px solid rgba(148, 163, 184, 0.5)",
                            color: "var(--text-primary)",
                            fontSize: "0.85rem",
                            boxShadow: "0 18px 45px rgba(0,0,0,0.6)",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "999px",
                                    backgroundColor: toast.type === "success" ? "#22c55e" : toast.type === "error" ? "#ef4444" : "var(--accent-blue)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/context/ToastContext.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: toast.message
                            }, void 0, false, {
                                fileName: "[project]/src/context/ToastContext.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, toast.id, true, {
                        fileName: "[project]/src/context/ToastContext.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/context/ToastContext.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/context/ToastContext.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(ToastProvider, "SzUHkW/VqISv0SPf/Zmk17pKvFQ=");
_c = ToastProvider;
function useToast() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!ctx) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return ctx;
}
_s1(useToast, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "ToastProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/locales/en/common.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"appName":"The Support Network","nav":{"back":"Back","home":"Home","coaches":"Coaches","community":"Community","resources":"Resources","signIn":"Sign In"},"loading":{"loading":"Loading...","saving":"Saving...","sending":"Sending...","signingIn":"Signing in..."},"empty":{"none":"Nothing here yet"},"actions":{"continue":"Continue","save":"Save","update":"Update","close":"Close","viewProfile":"View Profile"},"labels":{"unknownUser":"Unknown user"},"pages":{"coaches":{"title":"Our Specialized Coaches","subtitle":"Find the right person to support you on your journey."},"dashboard":{"welcome":"Welcome back","subtitle":"How can we support you today?"},"community":{"title":"Peer Communities","subtitle":"Connect with others who understand what you're going through."}},"toast":{"actionFailed":"Could not complete the action","messageSent":"Message sent","bookingAccepted":"Booking accepted","bookingDeclined":"Booking declined","profileSaved":"Profile saved","languageUpdated":"Language updated"}});}),
"[project]/src/locales/en/auth.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"signIn":{"title":"Welcome back","subtitle":"Sign in to your account","email":"Email","password":"Password","button":"Sign in","buttonLoading":"Signing in...","errorInvalid":"Wrong email or password","errorGeneric":"Something went wrong. Please try again.","noAccount":"Not a member yet?","joinNow":"Join now","backHome":"Back to home"},"register":{"title":"Create account","subtitle":"Start your journey today","roleUser":"I’m looking for support","roleCoach":"I’m a coach","name":"Name","email":"Email","password":"Password","coachNote":"As a coach, you will complete your profile after registration.","button":"Create account","buttonLoading":"Creating account...","alreadyMember":"Already a member?","signIn":"Sign in here","backHome":"Back to home","errorGeneric":"Registration failed"}});}),
"[project]/src/locales/en/home.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Welcome to The Support Network","welcomeBadge":"A safe space for you","subtitle":"A warm, safe space to find the support you deserve. Connect with specialized coaches, supportive communities, and helpful resources.","join":"Let's begin your journey","alreadyMember":"Already have an account?","signIn":"Sign In"});}),
"[project]/src/locales/en/intake.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"assistantGreeting":"Hi. I’m here to help you find the right support. Tell me a bit about what you’re going through right now.","thinking":"Finding the right support for you...","inputPlaceholder":"Describe what you want support with...","coachesTitle":"Coaches","communityTitle":"Community","viewProfile":"View profile","startChat":"Start chat","bookSession":"Book session","explore":"Explore","errorGeneric":"Something went wrong. Please try again."});}),
"[project]/src/locales/en/coach.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"dashboard":{"title":"Coach overview","messages":"Messages","bookings":"Bookings","summary":{"newMessages":"New messages","todayBookings":"Today's bookings","pendingRequests":"Pending requests","upcoming":"Upcoming sessions"},"emptyMessages":"No new messages","emptyBookings":"No pending or upcoming bookings","backToList":"Back to list","replyPlaceholder":"Write a message...","reply":"Reply","pendingTitle":"Pending requests","todayTitle":"Today's sessions","upcomingTitle":"Upcoming","accept":"Accept","decline":"Decline","status":{"pending":"Pending","confirmed":"Confirmed","declined":"Declined"}},"publicProfile":{"title":"Coach profile","selectFirst":"Please select a coach from the matching page first.","toMatching":"Go to matching","aboutMe":"About me","aboutBody":"I’m dedicated to supporting people in situations similar to yours. My focus is to create a safe and supportive space where we can explore solutions together.","privacyNote":"Your privacy matters. All conversations and bookings are encrypted and secure.","startChat":"Start chat","book":"Book a session"},"profile":{"createTitle":"Create your coach profile","editTitle":"Edit coach profile","createSubtitle":"You need to complete your coach profile before you can use your dashboard.","editSubtitle":"Update your information so the right people can find you.","noticeTitle":"You need to complete your coach profile","noticeBody":"Add an image, name and a short description to get started.","avatar":"Profile image","name":"Name","title":"Title","shortDescription":"Short description","longBio":"Long bio (optional)","specialties":"Specialties (optional)","languages":"Languages (optional)","years":"Years of experience (optional)","avatarHelper":"Paste a secure image URL. You’ll see a preview immediately.","avatarPlaceholder":"Profile image URL (https://...)","namePlaceholder":"Your full name","titlePlaceholder":"For example: Stress coach, Life coach...","shortPlaceholder":"Briefly describe who you are and how you support your clients.","longPlaceholder":"Share more about your background, approach and what matters in your sessions.","specialtiesPlaceholder":"For example: stress, burnout, relationships (comma separated)","languagesPlaceholder":"For example: English, Swedish","defaultLanguage":"English","yearsPlaceholder":"For example: 5","save":"Save profile","update":"Update profile","saving":"Saving...","validation":{"image":"Add a profile image","name":"Enter your name","short":"Write a short description"}}});}),
"[project]/src/locales/en/chat.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"initialCoachMessage":"Hi! I see you matched with me. How are you feeling today?","header":{"online":"Online","defaultCoach":"Your coach"},"disclaimer":"This is a private conversation between you and your coach.","emptyTitle":"Your conversation starts here.","emptySubtitle":"Write a message to start the conversation.","inputPlaceholder":"Write a message...","bookBar":"Feels right?","bookCta":"Book a session","welcome":"Hello! I'm Luna, your friendly guide at The Support Network. I'm here to help you find the right kind of support. Whenever you're ready, tell me a little about what's on your mind.","status":"Your Supportive Guide","defaultResponse":"Thank you for sharing. I'm here to listen. Would you like to explore some of our support options like coaching or peer communities?","coachResponse":"I understand you're looking for professional guidance. We have a wonderful selection of specialized coaches. Would you like to see our coach discovery page?","communityResponse":"Connecting with others can be so helpful. Our peer communities are safe spaces to share and listen. Shall I take you to the community groups?","resourcesResponse":"Sometimes having the right information is a great first step. I can show you our library of helpful resources. Would that be useful?","lunaInputPlaceholder":"Talk to Luna..."});}),
"[project]/src/locales/en/bookings.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"book":{"title":"Book a session with {{name}}","step1":"1. Choose session type","step2":"2. Choose an available time","confirm":"Confirm booking","video":"Video session","phone":"Phone session","videoSub":"Via our secure link","phoneSub":"Your coach will call you","successTitle":"Booked!","successBody":"You booked a {{type}} with {{name}}.","detailsTime":"Time","detailsType":"Type","tomorrowAt":"Tomorrow at {{time}}","backHome":"Back to home"}});}),
"[project]/src/locales/en/community.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Community","searchPlaceholder":"Search groups or topics...","heroTitle":"Find your community","heroBody":"You’re not alone. Share experiences and find support from others in similar situations.","popular":"Popular groups","join":"Join","newDiscussions":"New discussions","needHelpTitle":"Need to talk to someone right now?","needHelpBody":"Our coaches are here for you.","findCoach":"Find a coach","discussion1":"How do you handle morning anxiety?","discussion1Meta":"In Stress & recovery","discussion2":"Any book recommendations about grief?","discussion2Meta":"In Life transitions","membersSuffix":"members","explore":"Explore"});}),
"[project]/src/locales/en/admin.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Admin","overview":"Overview","users":"Users","coaches":"Coaches","bookings":"Bookings","messages":"Messages","platformOverview":"Platform overview","recentBookings":"Recent bookings","viewAll":"View all","table":{"user":"User","coach":"Coach","time":"Time","status":"Status"},"statusConfirmed":"Confirmed","statusPending":"Pending","statusCancelled":"Cancelled","searchUsers":"Search users...","searchBookings":"Search bookings...","settings":"Settings","manageUsersDescription":"Manage registered users and their permissions.","manageBookingsDescription":"View and manage all session bookings.","platformSettingsDescription":"Configure platform-wide settings and preferences.","sample":{"timeTomorrow":"Tomorrow 10:30"}});}),
"[project]/src/locales/en/howItWorks.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"How The Support Network Works","intro":"We designed this platform to be as simple and supportive as possible. You shouldn’t have to navigate complex systems when you’re overwhelmed.","s1Title":"1. Share what’s on your mind","s1Body":"Our AI intake assistant isn’t a therapist — it’s a guide. It helps you express what you’re going through so we can find the right human support for you.","s2Title":"2. Choose your coach","s2Body":"Based on your conversation, we suggest 3–5 coaches who specialize in your situation. Read their profiles and choose who you feel most comfortable with.","s3Title":"3. Start a conversation","s3Body":"Message your coach directly. If it feels right, book a video or phone session whenever you’re ready."});}),
"[project]/src/locales/en/hub.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"welcomeBack":"Welcome back, {{name}}","supportIntro":"We're here to support you. Take a moment and choose what feels right today.","checkin":{"title":"How are you feeling today?","options":{"calm":"Calm","stressed":"Stressed","sad":"Sad","overwhelmed":"Overwhelmed","talk":"Just need to talk"}},"cards":{"coach":{"title":"Talk to a Coach","description":"Connect with someone who understands what you're going through.","cta":"Explore Coaches"},"luna":{"title":"Continue with Luna","description":"If you'd like to talk or need help finding the right support, Luna is here.","cta":"Start Chat"},"community":{"title":"Join a Community","description":"You’re not alone. Find supportive spaces where others share similar experiences.","cta":"Explore Communities"},"resources":{"title":"Helpful Resources","description":"Articles, tools, and guidance that may help you through difficult moments.","cta":"Browse Resources"}},"journey":{"title":"Your Support Journey","recentChat":{"title":"Recent Conversation","description":"Continue your last chat with Luna."},"upcomingSession":{"title":"Upcoming Session","description":"You have a session scheduled with {{coachName}}."},"savedCoaches":{"title":"Saved Coaches","description":"Coaches you’ve explored or saved for later."}}});}),
"[project]/src/locales/sv/common.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"appName":"The Support Network","nav":{"back":"Tillbaka","home":"Start","coaches":"Coacher","community":"Community","resources":"Resurser","signIn":"Logga in"},"loading":{"loading":"Laddar...","saving":"Sparar...","sending":"Skickar...","signingIn":"Loggar in..."},"empty":{"none":"Inget här ännu"},"actions":{"continue":"Fortsätt","save":"Spara","update":"Uppdatera","close":"Stäng","viewProfile":"Visa profil"},"labels":{"unknownUser":"Okänd användare"},"pages":{"coaches":{"title":"Våra Specialiserade Coacher","subtitle":"Hitta rätt person som kan stötta dig på din resa."},"dashboard":{"welcome":"Välkommen tillbaka","subtitle":"Hur kan vi stötta dig idag?"},"community":{"title":"Community-grupper","subtitle":"Få kontakt med andra som förstår vad du går igenom."}},"toast":{"actionFailed":"Kunde inte genomföra åtgärden","messageSent":"Meddelandet skickades","bookingAccepted":"Bokningen accepterades","bookingDeclined":"Bokningen avböjdes","profileSaved":"Profilen sparades","languageUpdated":"Språket uppdaterades"}});}),
"[project]/src/locales/sv/auth.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"signIn":{"title":"Välkommen tillbaka","subtitle":"Logga in på ditt konto","email":"E-post","password":"Lösenord","button":"Logga in","buttonLoading":"Loggar in...","errorInvalid":"Fel e-post eller lösenord","errorGeneric":"Något gick fel. Försök igen.","noAccount":"Ingen medlem än?","joinNow":"Gå med nu","backHome":"Tillbaka till start"},"register":{"title":"Skapa konto","subtitle":"Börja din resa idag","roleUser":"Jag söker stöd","roleCoach":"Jag är coach","name":"Namn","email":"E-post","password":"Lösenord","coachNote":"Som coach kommer du fylla i din profil efter registrering.","button":"Gå med nu","buttonLoading":"Skapar konto...","alreadyMember":"Redan medlem?","signIn":"Logga in här","backHome":"Tillbaka till start","errorGeneric":"Registreringen misslyckades"}});}),
"[project]/src/locales/sv/home.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Välkommen till The Support Network","welcomeBadge":"En trygg plats för dig","subtitle":"En varm och trygg plats för att hitta det stöd du förtjänar. Få kontakt med specialiserade coacher, stöttande communities och hjälpsamma resurser.","join":"Påbörja din resa här","alreadyMember":"Har du redan ett konto?","signIn":"Logga in"});}),
"[project]/src/locales/sv/intake.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"assistantGreeting":"Hej. Jag är här för att hjälpa dig hitta rätt stöd. Berätta lite om vad du går igenom just nu.","thinking":"Letar efter rätt stöd för dig...","inputPlaceholder":"Beskriv vad du vill ha stöd med...","coachesTitle":"Coacher","communityTitle":"Community","viewProfile":"Visa profil","startChat":"Starta chatt","bookSession":"Boka tid","explore":"Utforska","errorGeneric":"Något gick fel. Försök igen."});}),
"[project]/src/locales/sv/coach.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"dashboard":{"title":"Coachöversikt","messages":"Meddelanden","bookings":"Bokningar","summary":{"newMessages":"Nya meddelanden","todayBookings":"Dagens bokningar","pendingRequests":"Väntande förfrågningar","upcoming":"Kommande samtal"},"emptyMessages":"Inga nya meddelanden","emptyBookings":"Inga väntande eller kommande bokningar","backToList":"Tillbaka till listan","replyPlaceholder":"Skriv ett meddelande...","reply":"Svara","pendingTitle":"Väntande förfrågningar","todayTitle":"Dagens samtal","upcomingTitle":"Kommande","accept":"Acceptera","decline":"Avböj","status":{"pending":"Väntar","confirmed":"Bekräftad","declined":"Avböjd"}},"publicProfile":{"title":"Coachprofil","selectFirst":"Vänligen välj en coach från matchningssidan först.","toMatching":"Till matchningen","aboutMe":"Om mig","aboutBody":"Jag är dedikerad till att hjälpa personer i liknande situationer som din. Mitt fokus ligger på att skapa en trygg och stöttande miljö där vi kan utforska lösningar tillsammans.","privacyNote":"Din integritet är viktig. Alla samtal och bokningar är krypterade och säkra.","startChat":"Starta chatt","book":"Boka tid"},"profile":{"createTitle":"Skapa din coachprofil","editTitle":"Redigera coachprofil","createSubtitle":"Du behöver först slutföra din coachprofil innan du kan använda din coachöversikt.","editSubtitle":"Uppdatera din information så att rätt personer hittar dig.","noticeTitle":"Du behöver först slutföra din coachprofil","noticeBody":"Lägg till bild, namn och en kort beskrivning för att komma igång.","avatar":"Profilbild","name":"Namn","title":"Titel","shortDescription":"Kort beskrivning","longBio":"Längre presentation (valfritt)","specialties":"Specialiseringar (valfritt)","languages":"Språk (valfritt)","years":"År av erfarenhet (valfritt)","avatarHelper":"Klistra in en säker bildlänk. Du ser en förhandsvisning direkt.","avatarPlaceholder":"Länk till profilbild (https://...)","namePlaceholder":"Ditt fullständiga namn","titlePlaceholder":"Till exempel: Stresscoach, Samtalscoach...","shortPlaceholder":"Beskriv kort vem du är och hur du stöttar dina klienter.","longPlaceholder":"Berätta mer om din bakgrund, ditt arbetssätt och vad som är viktigt i dina samtal.","specialtiesPlaceholder":"Till exempel: stress, utmattning, relationer (kommaseparerat)","languagesPlaceholder":"Till exempel: Svenska, Engelska","defaultLanguage":"Svenska","yearsPlaceholder":"Till exempel: 5","save":"Spara profil","update":"Uppdatera profil","saving":"Sparar...","validation":{"image":"Lägg till en profilbild","name":"Fyll i ditt namn","short":"Skriv en kort beskrivning"}}});}),
"[project]/src/locales/sv/chat.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"initialCoachMessage":"Hej! Jag ser att du matchades med mig. Hur mår du idag?","header":{"online":"Online","defaultCoach":"Din coach"},"disclaimer":"Det här är ett privat samtal mellan dig och din coach.","emptyTitle":"Din konversation börjar här.","emptySubtitle":"Skriv ett meddelande för att starta samtalet.","inputPlaceholder":"Skriv ett meddelande...","bookBar":"Känns det rätt?","bookCta":"Boka ett samtal","welcome":"Hej! Jag heter Luna och är din personliga guide här på The Support Network. Jag finns här för att hjälpa dig hitta rätt stöd. När du är redo får du gärna berätta lite om vad du funderar på.","status":"Din personliga guide","defaultResponse":"Tack för att du delar med dig. Jag finns här och lyssnar. Vill du utforska våra stödalternativ som coaching eller community-grupper?","coachResponse":"Jag förstår att du letar efter professionell vägledning. Vi har ett fint urval av specialiserade coacher. Vill du att jag visar dig vår sida för att hitta en coach?","communityResponse":"Att få kontakt med andra kan vara till stor hjälp. Våra community-grupper är trygga platser att dela och lyssna. Ska jag ta dig till grupperna?","resourcesResponse":"Ibland är rätt information ett bra första steg. Jag kan visa dig vårt bibliotek med hjälpsamma resurser. Skulle det vara till nytta?","lunaInputPlaceholder":"Prata med Luna..."});}),
"[project]/src/locales/sv/bookings.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"book":{"title":"Boka tid med {{name}}","step1":"1. Välj typ av samtal","step2":"2. Välj en ledig tid","confirm":"Bekräfta bokning","video":"Videosamtal","phone":"Telefonsamtal","videoSub":"Via vår säkra länk","phoneSub":"Coachen ringer upp dig","successTitle":"Bokad och klar!","successBody":"Du har bokat ett {{type}} med {{name}}.","detailsTime":"Tid","detailsType":"Typ","tomorrowAt":"Imorgon kl {{time}}","backHome":"Tillbaka till start"}});}),
"[project]/src/locales/sv/community.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Community","searchPlaceholder":"Sök grupper eller ämnen...","heroTitle":"Hitta din gemenskap","heroBody":"Du är inte ensam. Här kan du dela erfarenheter och hitta stöd hos andra i liknande situationer.","popular":"Populära grupper","join":"Gå med","newDiscussions":"Nya diskussioner","needHelpTitle":"Behöver du prata med någon direkt?","needHelpBody":"Våra coacher finns här för dig.","findCoach":"Hitta en coach","discussion1":"Hur hanterar ni morgonångest?","discussion1Meta":"I Stress & återhämtning","discussion2":"Tips på bra böcker om sorg?","discussion2Meta":"I Livsförändringar","membersSuffix":"medlemmar","explore":"Utforska"});}),
"[project]/src/locales/sv/admin.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Admin","overview":"Översikt","users":"Användare","coaches":"Coacher","bookings":"Bokningar","messages":"Meddelanden","platformOverview":"Plattformens översikt","recentBookings":"Senaste bokningarna","viewAll":"Visa alla","table":{"user":"Användare","coach":"Coach","time":"Tid","status":"Status"},"statusConfirmed":"Bekräftad","statusPending":"Väntande","statusCancelled":"Avbokad","searchUsers":"Sök användare...","searchBookings":"Sök bokningar...","settings":"Inställningar","manageUsersDescription":"Hantera registrerade användare och deras behörigheter.","manageBookingsDescription":"Visa och hantera alla sessionsbokningar.","platformSettingsDescription":"Konfigurera plattformens inställningar och preferenser.","sample":{"timeTomorrow":"Imorgon 10:30"}});}),
"[project]/src/locales/sv/howItWorks.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Så fungerar The Support Network","intro":"Vi har utformat plattformen för att vara så enkel och stöttande som möjligt. Du ska inte behöva navigera komplexa system när du redan har det tufft.","s1Title":"1. Dela det som känns viktigt","s1Body":"Vår AI‑assistent är ingen terapeut — den är en guide. Den hjälper dig att sätta ord på det du går igenom så att vi kan hitta rätt mänskligt stöd för dig.","s2Title":"2. Välj din coach","s2Body":"Utifrån samtalet föreslår vi 3–5 coacher som är specialiserade på din situation. Läs profilerna och välj den du känner dig mest bekväm med.","s3Title":"3. Starta en konversation","s3Body":"Meddela din coach direkt. Om det känns rätt kan du boka ett video- eller telefonsamtal när du är redo."});}),
"[project]/src/locales/sv/hub.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"welcomeBack":"Välkommen tillbaka, {{name}}","supportIntro":"Vi finns här för att stötta dig. Ta en stund och välj det som känns rätt idag.","checkin":{"title":"Hur mår du idag?","options":{"calm":"Lugn","stressed":"Stressad","sad":"Ledsen","overwhelmed":"Överväldigad","talk":"Behöver bara prata"}},"cards":{"coach":{"title":"Prata med en coach","description":"Få kontakt med någon som förstår vad du går igenom.","cta":"Utforska coacher"},"luna":{"title":"Fortsätt med Luna","description":"Om du vill prata eller behöver hjälp att hitta rätt stöd finns Luna här.","cta":"Starta chatt"},"community":{"title":"Gå med i en grupp","description":"Du är inte ensam. Hitta trygga rum där andra delar liknande erfarenheter.","cta":"Utforska grupper"},"resources":{"title":"Hjälpsamma resurser","description":"Artiklar, verktyg och vägledning som kan hjälpa dig genom svåra stunder.","cta":"Bläddra i resurser"}},"journey":{"title":"Din stödresa","recentChat":{"title":"Senaste konversationen","description":"Fortsätt din senaste chatt med Luna."},"upcomingSession":{"title":"Kommande session","description":"Du har en session inbokad med {{coachName}}."},"savedCoaches":{"title":"Sparade coacher","description":"Coacher du har utforskat eller sparat till senare."}}});}),
"[project]/src/locales/es/common.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"appName":"The Support Network","nav":{"back":"Volver","home":"Inicio","coaches":"Coaches","community":"Comunidad","resources":"Recursos","signIn":"Iniciar sesión"},"loading":{"loading":"Cargando...","saving":"Guardando...","sending":"Enviando...","signingIn":"Iniciando sesión..."},"empty":{"none":"Aún no hay nada aquí"},"actions":{"continue":"Continuar","save":"Guardar","update":"Actualizar","close":"Cerrar","viewProfile":"Ver perfil"},"labels":{"unknownUser":"Usuario desconocido"},"pages":{"coaches":{"title":"Nuestros coaches especializados","subtitle":"Encuentra a la persona adecuada para acompañarte en tu camino."},"dashboard":{"welcome":"Bienvenido de nuevo","subtitle":"¿Cómo podemos ayudarte hoy?"},"community":{"title":"Comunidades pares","subtitle":"Conéctate con otros que entienden por lo que estás pasando."}},"toast":{"actionFailed":"No se pudo completar la acción","messageSent":"Mensaje enviado","bookingAccepted":"Reserva aceptada","bookingDeclined":"Reserva rechazada","profileSaved":"Perfil guardado","languageUpdated":"Idioma actualizado"}});}),
"[project]/src/locales/es/auth.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"signIn":{"title":"Bienvenido de nuevo","subtitle":"Inicia sesión en tu cuenta","email":"Correo electrónico","password":"Contraseña","button":"Iniciar sesión","buttonLoading":"Iniciando sesión...","errorInvalid":"Correo o contraseña incorrectos","errorGeneric":"Algo salió mal. Inténtalo de nuevo.","noAccount":"¿Aún no eres miembro?","joinNow":"Únete ahora","backHome":"Volver al inicio"},"register":{"title":"Crear cuenta","subtitle":"Empieza tu camino hoy","roleUser":"Busco apoyo","roleCoach":"Soy coach","name":"Nombre","email":"Correo electrónico","password":"Contraseña","coachNote":"Como coach, completarás tu perfil después del registro.","button":"Crear cuenta","buttonLoading":"Creando cuenta...","alreadyMember":"¿Ya eres miembro?","signIn":"Inicia sesión aquí","backHome":"Volver al inicio","errorGeneric":"El registro falló"}});}),
"[project]/src/locales/es/home.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"¡Bienvenido a The Support Network!","join":"Haz clic aquí para unirte","alreadyMember":"¿Ya eres miembro?","signIn":"Iniciar sesión"});}),
"[project]/src/locales/es/intake.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"assistantGreeting":"Hola. Estoy aquí para ayudarte a encontrar el apoyo adecuado. Cuéntame un poco sobre lo que estás viviendo ahora.","thinking":"Buscando el apoyo adecuado para ti...","inputPlaceholder":"Describe en qué quieres apoyo...","coachesTitle":"Coaches","communityTitle":"Comunidad","viewProfile":"Ver perfil","startChat":"Iniciar chat","bookSession":"Reservar sesión","explore":"Explorar","errorGeneric":"Algo salió mal. Inténtalo de nuevo."});}),
"[project]/src/locales/es/coach.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"dashboard":{"title":"Panel del coach","messages":"Mensajes","bookings":"Reservas","summary":{"newMessages":"Nuevos mensajes","todayBookings":"Reservas de hoy","pendingRequests":"Solicitudes pendientes","upcoming":"Sesiones próximas"},"emptyMessages":"No hay mensajes nuevos","emptyBookings":"No hay reservas pendientes o próximas","backToList":"Volver a la lista","replyPlaceholder":"Escribe un mensaje...","reply":"Responder","pendingTitle":"Solicitudes pendientes","todayTitle":"Sesiones de hoy","upcomingTitle":"Próximas","accept":"Aceptar","decline":"Rechazar","status":{"pending":"Pendiente","confirmed":"Confirmada","declined":"Rechazada"}},"publicProfile":{"title":"Perfil del coach","selectFirst":"Por favor, primero elige un coach en la página de matching.","toMatching":"Ir al matching","aboutMe":"Sobre mí","aboutBody":"Estoy dedicado a apoyar a personas en situaciones similares a la tuya. Mi objetivo es crear un espacio seguro y cercano donde podamos explorar soluciones juntos.","privacyNote":"Tu privacidad importa. Todas las conversaciones y reservas están cifradas y seguras.","startChat":"Iniciar chat","book":"Reservar sesión"},"profile":{"createTitle":"Crea tu perfil de coach","editTitle":"Editar perfil de coach","createSubtitle":"Necesitas completar tu perfil antes de usar el panel.","editSubtitle":"Actualiza tu información para que las personas correctas te encuentren.","noticeTitle":"Necesitas completar tu perfil de coach","noticeBody":"Añade una imagen, tu nombre y una descripción corta para empezar.","avatar":"Imagen de perfil","name":"Nombre","title":"Título","shortDescription":"Descripción corta","longBio":"Biografía larga (opcional)","specialties":"Especialidades (opcional)","languages":"Idiomas (opcional)","years":"Años de experiencia (opcional)","avatarHelper":"Pega una URL segura. Verás una vista previa al instante.","avatarPlaceholder":"URL de imagen de perfil (https://...)","namePlaceholder":"Tu nombre completo","titlePlaceholder":"Por ejemplo: Coach de estrés, Coach de vida...","shortPlaceholder":"Describe brevemente quién eres y cómo ayudas a tus clientes.","longPlaceholder":"Cuenta más sobre tu experiencia, tu enfoque y lo que importa en tus sesiones.","specialtiesPlaceholder":"Por ejemplo: estrés, burnout, relaciones (separado por comas)","languagesPlaceholder":"Por ejemplo: Español, Inglés","defaultLanguage":"Español","yearsPlaceholder":"Por ejemplo: 5","save":"Guardar perfil","update":"Actualizar perfil","saving":"Guardando...","validation":{"image":"Añade una imagen de perfil","name":"Escribe tu nombre","short":"Escribe una descripción corta"}}});}),
"[project]/src/locales/es/chat.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"initialCoachMessage":"¡Hola! Veo que has hecho match conmigo. ¿Cómo te sientes hoy?","header":{"online":"En línea","defaultCoach":"Tu coach"},"disclaimer":"Esta es una conversación privada entre tú y tu coach.","emptyTitle":"Tu conversación empieza aquí.","emptySubtitle":"Escribe un mensaje para comenzar.","welcome":"¡Hola! Soy Luna, tu guía amable en The Support Network. Estou aquí para ayudarte a encontrar el tipo de apoyo adecuado. Cuando estés listo, cuéntame un poco sobre lo que tienes en mente.","status":"Tu Guía de Apoyo","defaultResponse":"Gracias por compartirlo. Parece que estás pasando por mucho. Estoy aquí para apoyarte. ¿Te gustaría explorar algunas opciones de coaching o quizás ver nuestros grupos comunitarios?","inputPlaceholder":"Escribe un mensaje...","bookBar":"¿Se siente bien?","bookCta":"Reservar una sesión"});}),
"[project]/src/locales/es/bookings.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"book":{"title":"Reserva una sesión con {{name}}","step1":"1. Elige el tipo de sesión","step2":"2. Elige un horario disponible","confirm":"Confirmar reserva","video":"Sesión por video","phone":"Sesión por teléfono","videoSub":"A través de nuestro enlace seguro","phoneSub":"El coach te llamará","successTitle":"¡Reserva confirmada!","successBody":"Reservaste una {{type}} con {{name}}.","detailsTime":"Hora","detailsType":"Tipo","tomorrowAt":"Mañana a las {{time}}","backHome":"Volver al inicio"}});}),
"[project]/src/locales/es/community.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Comunidad","searchPlaceholder":"Buscar grupos o temas...","heroTitle":"Encuentra tu comunidad","heroBody":"No estás solo. Comparte experiencias y encuentra apoyo de otras personas en situaciones similares.","popular":"Grupos populares","join":"Unirse","newDiscussions":"Nuevas conversaciones","needHelpTitle":"¿Necesitas hablar con alguien ahora?","needHelpBody":"Nuestros coaches están aquí para ti.","findCoach":"Encontrar un coach","discussion1":"¿Cómo manejan la ansiedad por la mañana?","discussion1Meta":"En Estrés y recuperación","discussion2":"¿Recomendaciones de libros sobre duelo?","discussion2Meta":"En Transiciones de vida"});}),
"[project]/src/locales/es/admin.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Admin","overview":"Resumen","users":"Usuarios","coaches":"Coaches","bookings":"Reservas","messages":"Mensajes","platformOverview":"Resumen de la plataforma","recentBookings":"Reservas recientes","viewAll":"Ver todo","table":{"user":"Usuario","coach":"Coach","time":"Hora","status":"Estado"},"statusConfirmed":"Confirmada","statusPending":"Pendiente","statusCancelled":"Cancelada","searchUsers":"Buscar usuarios...","searchBookings":"Buscar reservas...","settings":"Ajustes","manageUsersDescription":"Administrar usuarios registrados y sus permisos.","manageBookingsDescription":"Ver y gestionar todas las reservas de sesiones.","platformSettingsDescription":"Configurar los ajustes y preferencias de toda la plataforma.","sample":{"timeTomorrow":"Mañana 10:30"}});}),
"[project]/src/locales/es/howItWorks.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Cómo funciona The Support Network","intro":"Diseñamos esta plataforma para que sea lo más simple y humana posible. No deberías tener que navegar sistemas complejos cuando te sientes abrumado.","s1Title":"1. Comparte lo que tienes en mente","s1Body":"Nuestro asistente de admisión con IA no es un terapeuta — es una guía. Te ayuda a expresar lo que estás viviendo para encontrar el apoyo humano adecuado.","s2Title":"2. Elige tu coach","s2Body":"Según tu conversación, sugerimos 3–5 coaches especializados en tu situación. Lee sus perfiles y elige con quién te sientas más cómodo.","s3Title":"3. Inicia una conversación","s3Body":"Envía mensajes a tu coach. Si se siente bien, reserva una sesión por video o teléfono cuando estés listo."});}),
"[project]/src/locales/es/hub.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"welcomeBack":"Bienvenido de nuevo, {{name}}","supportIntro":"Estamos aquí para apoyarte. Tómate un momento y elige lo que te parezca mejor hoy.","checkin":{"title":"¿Cómo te sientes hoy?","options":{"calm":"Calmado","stressed":"Estresado","sad":"Triste","overwhelmed":"Abrumado","talk":"Solo necesito hablar"}},"cards":{"coach":{"title":"Hablar con un Coach","description":"Conecta con alguien que entienda por lo que estás pasando.","cta":"Explorar Coaches"},"luna":{"title":"Continuar con Luna","description":"Si quieres hablar o necesitas ayuda para encontrar el apoyo adecuado, Luna está aquí.","cta":"Iniciar Chat"},"community":{"title":"Unirse a una Comunidad","description":"No estás solo. Encuentra espacios de apoyo donde otros compartan experiencias similares.","cta":"Explorar Comunidades"},"resources":{"title":"Recursos Útiles","description":"Artículos, herramientas y orientación que pueden ayudarte en momentos difíciles.","cta":"Explorar Recursos"}},"journey":{"title":"Tu viaje de apoyo","recentChat":{"title":"Conversación reciente","description":"Continúa tu última charla con Luna."},"upcomingSession":{"title":"Próxima sesión","description":"Tienes una sesión programada con {{coachName}}."},"savedCoaches":{"title":"Coaches guardados","description":"Coaches que has explorado o guardado para más tarde."}}});}),
"[project]/src/i18n/resources.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getResources",
    ()=>getResources
]);
// Static imports keep it simple and robust.
// If this grows, we can switch to dynamic imports per-locale.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$common$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/en/common.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$auth$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/en/auth.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/en/home.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$intake$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/en/intake.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$coach$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/en/coach.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$chat$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/en/chat.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$bookings$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/en/bookings.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$community$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/en/community.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$admin$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/en/admin.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$howItWorks$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/en/howItWorks.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$hub$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/en/hub.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$common$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/sv/common.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$auth$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/sv/auth.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/sv/home.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$intake$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/sv/intake.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$coach$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/sv/coach.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$chat$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/sv/chat.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$bookings$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/sv/bookings.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$community$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/sv/community.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$admin$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/sv/admin.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$howItWorks$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/sv/howItWorks.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$hub$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/sv/hub.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$common$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/es/common.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$auth$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/es/auth.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$home$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/es/home.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$intake$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/es/intake.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$coach$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/es/coach.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$chat$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/es/chat.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$bookings$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/es/bookings.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$community$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/es/community.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$admin$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/es/admin.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$howItWorks$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/es/howItWorks.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$hub$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/es/hub.json (json)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const resources = {
    en: {
        common: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$common$2e$json__$28$json$29$__["default"],
        auth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$auth$2e$json__$28$json$29$__["default"],
        home: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$home$2e$json__$28$json$29$__["default"],
        intake: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$intake$2e$json__$28$json$29$__["default"],
        coach: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$coach$2e$json__$28$json$29$__["default"],
        chat: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$chat$2e$json__$28$json$29$__["default"],
        bookings: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$bookings$2e$json__$28$json$29$__["default"],
        community: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$community$2e$json__$28$json$29$__["default"],
        admin: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$admin$2e$json__$28$json$29$__["default"],
        howItWorks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$howItWorks$2e$json__$28$json$29$__["default"],
        hub: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$hub$2e$json__$28$json$29$__["default"]
    },
    sv: {
        common: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$common$2e$json__$28$json$29$__["default"],
        auth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$auth$2e$json__$28$json$29$__["default"],
        home: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$home$2e$json__$28$json$29$__["default"],
        intake: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$intake$2e$json__$28$json$29$__["default"],
        coach: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$coach$2e$json__$28$json$29$__["default"],
        chat: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$chat$2e$json__$28$json$29$__["default"],
        bookings: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$bookings$2e$json__$28$json$29$__["default"],
        community: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$community$2e$json__$28$json$29$__["default"],
        admin: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$admin$2e$json__$28$json$29$__["default"],
        howItWorks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$howItWorks$2e$json__$28$json$29$__["default"],
        hub: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$hub$2e$json__$28$json$29$__["default"]
    },
    es: {
        common: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$common$2e$json__$28$json$29$__["default"],
        auth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$auth$2e$json__$28$json$29$__["default"],
        home: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$home$2e$json__$28$json$29$__["default"],
        intake: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$intake$2e$json__$28$json$29$__["default"],
        coach: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$coach$2e$json__$28$json$29$__["default"],
        chat: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$chat$2e$json__$28$json$29$__["default"],
        bookings: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$bookings$2e$json__$28$json$29$__["default"],
        community: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$community$2e$json__$28$json$29$__["default"],
        admin: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$admin$2e$json__$28$json$29$__["default"],
        howItWorks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$howItWorks$2e$json__$28$json$29$__["default"],
        hub: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$hub$2e$json__$28$json$29$__["default"]
    }
};
function getResources(locale) {
    return resources[locale] ?? resources.en;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/i18n/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNestedValue",
    ()=>getNestedValue,
    "interpolate",
    ()=>interpolate
]);
function getNestedValue(obj, path) {
    if (!obj) return undefined;
    return path.split(".").reduce((acc, key)=>acc ? acc[key] : undefined, obj);
}
function interpolate(template, vars) {
    if (!vars) return template;
    return template.replace(/\{\{(\w+)\}\}/g, (_, key)=>{
        const v = vars[key];
        return v === undefined || v === null ? "" : String(v);
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$resources$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/resources.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const STORAGE_KEY = "tsn_locale";
const COOKIE_KEY = "tsn_locale";
const availableLocales = [
    {
        locale: "en",
        label: "English",
        flag: "🇬🇧"
    },
    {
        locale: "sv",
        label: "Svenska",
        flag: "🇸🇪"
    },
    {
        locale: "es",
        label: "Español",
        flag: "🇪🇸"
    }
];
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function normalizeLocale(input) {
    if (!input) return null;
    const lower = input.toLowerCase();
    if (lower === "en" || lower.startsWith("en-")) return "en";
    if (lower === "sv" || lower.startsWith("sv-")) return "sv";
    if (lower === "es" || lower.startsWith("es-")) return "es";
    return null;
}
function readCookie(name) {
    if (typeof document === "undefined") return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift() ?? null;
    return null;
}
function writeCookie(name, value) {
    if (typeof document === "undefined") return;
    document.cookie = `${name}=${value}; path=/; max-age=31536000; samesite=lax`;
}
function LanguageProvider({ children }) {
    _s();
    const [locale, setLocaleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            const fromStorage = normalizeLocale(localStorage.getItem(STORAGE_KEY));
            const fromCookie = normalizeLocale(readCookie(COOKIE_KEY));
            // Priority: Storage > Cookie > Default (English)
            // We ignore navigator.language to ensure the user's preference for English is respected.
            setLocaleState(fromStorage ?? fromCookie ?? "en");
        }
    }["LanguageProvider.useEffect"], []);
    const setLocale = (next)=>{
        setLocaleState(next);
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch  {
        // ignore
        }
        writeCookie(COOKIE_KEY, next);
    };
    const resources = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$resources$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResources"])(locale);
    const fallbackResources = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$resources$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResources"])("en");
    const t = (key, vars)=>{
        const [ns, rest] = key.includes(":") ? key.split(":") : [
            "common",
            key
        ];
        const nsTyped = ns || "common";
        const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNestedValue"])(resources[nsTyped], rest) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNestedValue"])(fallbackResources[nsTyped], rest) ?? key;
        if (typeof value !== "string") return key;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(value, vars);
    };
    const tn = (ns)=>(key, vars)=>t(`${ns}:${key}`, vars);
    const value = {
        locale,
        setLocale,
        availableLocales,
        t,
        tn
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/LanguageContext.tsx",
        lineNumber: 97,
        columnNumber: 12
    }, this);
}
_s(LanguageProvider, "khLE4e6Saw106TElYr78R7Ktb24=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!ctx) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return ctx;
}
_s1(useLanguage, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ToastContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastProvider"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/Providers.tsx",
                lineNumber: 11,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Providers.tsx",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Providers.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RouteTransitionLoader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RouteTransitionLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function RouteTransitionLoader() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RouteTransitionLoader.useEffect": ()=>{
            // App Router has no route events; we show a subtle transition on pathname changes.
            setVisible(true);
            const t = setTimeout({
                "RouteTransitionLoader.useEffect.t": ()=>setVisible(false)
            }["RouteTransitionLoader.useEffect.t"], 500);
            return ({
                "RouteTransitionLoader.useEffect": ()=>clearTimeout(t)
            })["RouteTransitionLoader.useEffect"];
        }
    }["RouteTransitionLoader.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": "true",
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            zIndex: 55,
            opacity: visible ? 1 : 0,
            transition: "opacity 200ms ease"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                height: "100%",
                width: visible ? "85%" : "0%",
                transition: visible ? "width 500ms cubic-bezier(0.4, 0, 0.2, 1)" : "none",
                background: "linear-gradient(90deg, rgba(123,159,182,0.0) 0%, rgba(123,159,182,0.9) 30%, rgba(196,30,58,0.85) 100%)",
                boxShadow: "0 0 18px rgba(123,159,182,0.35)"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/RouteTransitionLoader.tsx",
            lineNumber: 31,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/RouteTransitionLoader.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
_s(RouteTransitionLoader, "Rd2BKBZgt/SGXMV3EYrkNTUZ3iY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = RouteTransitionLoader;
var _c;
__turbopack_context__.k.register(_c, "RouteTransitionLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ChatAssistant.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionBtn": "ChatAssistant-module__IUfz-a__actionBtn",
  "actionCard": "ChatAssistant-module__IUfz-a__actionCard",
  "actionCards": "ChatAssistant-module__IUfz-a__actionCards",
  "assistant": "ChatAssistant-module__IUfz-a__assistant",
  "avatar": "ChatAssistant-module__IUfz-a__avatar",
  "bounce": "ChatAssistant-module__IUfz-a__bounce",
  "bubble": "ChatAssistant-module__IUfz-a__bubble",
  "dot": "ChatAssistant-module__IUfz-a__dot",
  "header": "ChatAssistant-module__IUfz-a__header",
  "headerActions": "ChatAssistant-module__IUfz-a__headerActions",
  "headerInfo": "ChatAssistant-module__IUfz-a__headerInfo",
  "input": "ChatAssistant-module__IUfz-a__input",
  "inputArea": "ChatAssistant-module__IUfz-a__inputArea",
  "message": "ChatAssistant-module__IUfz-a__message",
  "messages": "ChatAssistant-module__IUfz-a__messages",
  "minimized": "ChatAssistant-module__IUfz-a__minimized",
  "name": "ChatAssistant-module__IUfz-a__name",
  "sendBtn": "ChatAssistant-module__IUfz-a__sendBtn",
  "slideUp": "ChatAssistant-module__IUfz-a__slideUp",
  "status": "ChatAssistant-module__IUfz-a__status",
  "trigger": "ChatAssistant-module__IUfz-a__trigger",
  "typing": "ChatAssistant-module__IUfz-a__typing",
  "user": "ChatAssistant-module__IUfz-a__user",
  "window": "ChatAssistant-module__IUfz-a__window",
});
}),
"[project]/src/i18n/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useT",
    ()=>useT,
    "useTranslation",
    ()=>useTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
function useTranslation(ns) {
    _s();
    const { t, tn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const translate = ns ? tn(ns) : t;
    return {
        t: translate
    };
}
_s(useTranslation, "tup7FwBWkRI3mxJdA+ZSDykcDIg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
function useT(ns) {
    _s1();
    const { t, tn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    return ns ? tn(ns) : t;
}
_s1(useT, "tup7FwBWkRI3mxJdA+ZSDykcDIg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ChatAssistant.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatAssistant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ChatAssistant.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ChatAssistant() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMinimized, setIsMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])('chat');
    const { t: tCommon } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])('common');
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initial welcome message - updates on locale change if it's the first message
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatAssistant.useEffect": ()=>{
            if (messages.length <= 1) {
                const welcomeMsg = {
                    role: 'assistant',
                    content: t('welcome') || "Hello! I'm Luna, your friendly guide at The Support Network. I'm here to help you find the right kind of support. Whenever you're ready, tell me a little about what's on your mind.",
                    actions: [
                        {
                            label: tCommon('nav.coaches'),
                            path: '/coaches'
                        },
                        {
                            label: tCommon('nav.community'),
                            path: '/community'
                        },
                        {
                            label: tCommon('nav.resources'),
                            path: '/resources'
                        }
                    ]
                };
                if (messages.length === 0) {
                    setMessages([
                        welcomeMsg
                    ]);
                } else if (messages[0].role === 'assistant') {
                    // Update existing welcome message if language changed
                    setMessages([
                        welcomeMsg
                    ]);
                }
            }
        }
    }["ChatAssistant.useEffect"], [
        locale,
        t,
        tCommon
    ]);
    // Handle external triggers (e.g. from Support Hub)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatAssistant.useEffect": ()=>{
            const handleTrigger = {
                "ChatAssistant.useEffect.handleTrigger": (event)=>{
                    const customEvent = event;
                    const { action, text } = customEvent.detail || {};
                    setIsOpen(true);
                    setIsMinimized(false);
                    if (action === 'send' && text) {
                        // Simulate the user sending a message
                        setInput(text);
                    // We'll use a small timeout to let the state update or just call handleSend directly if we refactor it
                    }
                }
            }["ChatAssistant.useEffect.handleTrigger"];
            window.addEventListener('tsn:trigger-luna', handleTrigger);
            return ({
                "ChatAssistant.useEffect": ()=>window.removeEventListener('tsn:trigger-luna', handleTrigger)
            })["ChatAssistant.useEffect"];
        }
    }["ChatAssistant.useEffect"], []);
    // Refactored handleSend logic to be callable internally
    const sendMessage = (text)=>{
        if (!text.trim()) return;
        const userMsg = text.toLowerCase();
        setMessages((prev)=>[
                ...prev,
                {
                    role: 'user',
                    content: text
                }
            ]);
        setIsTyping(true);
        // Simulated AI logic with keyword parsing
        setTimeout(()=>{
            setIsTyping(false);
            let responseContent = t('defaultResponse');
            let suggestedActions = [];
            if (userMsg.includes('coach') || userMsg.includes('yes') && messages[messages.length - 1]?.content.includes('coach')) {
                responseContent = t('coachResponse');
                suggestedActions = [
                    {
                        label: tCommon('nav.coaches'),
                        path: '/coaches'
                    }
                ];
            } else if (userMsg.includes('communit') || userMsg.includes('group') || userMsg.includes('yes') && messages[messages.length - 1]?.content.includes('communit')) {
                responseContent = t('communityResponse');
                suggestedActions = [
                    {
                        label: tCommon('nav.community'),
                        path: '/community'
                    }
                ];
            } else if (userMsg.includes('resourc') || userMsg.includes('library') || userMsg.includes('help')) {
                responseContent = t('resourcesResponse');
                suggestedActions = [
                    {
                        label: tCommon('nav.resources'),
                        path: '/resources'
                    }
                ];
            } else if (userMsg.includes('stress') || userMsg.includes('anxiety') || userMsg.includes('feel') || userMsg.includes('mår') || userMsg.includes('mood') || userMsg.includes('känsla')) {
                responseContent = t('defaultResponse');
                suggestedActions = [
                    {
                        label: tCommon('nav.coaches'),
                        path: '/coaches'
                    },
                    {
                        label: tCommon('nav.community'),
                        path: '/community'
                    }
                ];
            } else if (userMsg === 'yes' || userMsg === 'ja' || userMsg === 'si') {
                responseContent = t('defaultResponse'); // General help if 'yes' is ambiguous
                suggestedActions = [
                    {
                        label: tCommon('nav.coaches'),
                        path: '/coaches'
                    },
                    {
                        label: tCommon('nav.community'),
                        path: '/community'
                    }
                ];
            }
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: 'assistant',
                        content: responseContent || "I'm here to help. Would you like to see our coaches or community groups?",
                        actions: suggestedActions.length > 0 ? suggestedActions : undefined
                    }
                ]);
        }, 1500);
    };
    // Use effect to handle the 'send' action from trigger
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatAssistant.useEffect": ()=>{
            if (input && isOpen && !isMinimized && messages[messages.length - 1]?.role !== 'user') {
                // Check if input was set by a trigger
                if (input.startsWith("MOOD_") || input.startsWith("ACTION_")) {
                    const messageToSend = input.startsWith("MOOD_") ? `I'm feeling ${input.split('_')[1]} right now.` : "I'd like to continue our conversation.";
                    setInput('');
                    sendMessage(messageToSend);
                }
            }
        }
    }["ChatAssistant.useEffect"], [
        input,
        isOpen,
        isMinimized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatAssistant.useEffect": ()=>{
            if (scrollRef.current) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
        }
    }["ChatAssistant.useEffect"], [
        messages,
        isTyping
    ]);
    const handleSend = ()=>{
        if (!input.trim()) return;
        const text = input;
        setInput('');
        sendMessage(text);
    };
    if (!isOpen) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trigger,
            onClick: ()=>setIsOpen(true),
            "aria-label": "Open Chat",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                size: 28
            }, void 0, false, {
                fileName: "[project]/src/components/ChatAssistant.tsx",
                lineNumber: 140,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ChatAssistant.tsx",
            lineNumber: 139,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].window} ${isMinimized ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].minimized : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerInfo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    size: 18,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarIcon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChatAssistant.tsx",
                                    lineNumber: 150,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatAssistant.tsx",
                                lineNumber: 149,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                                        children: "Luna"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatAssistant.tsx",
                                        lineNumber: 153,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].status,
                                        children: t('status') || "Your Supportive Guide"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatAssistant.tsx",
                                        lineNumber: 154,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatAssistant.tsx",
                                lineNumber: 152,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatAssistant.tsx",
                        lineNumber: 148,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerActions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMinimized(!isMinimized),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionBtn,
                                "aria-label": "Minimize",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChatAssistant.tsx",
                                    lineNumber: 159,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatAssistant.tsx",
                                lineNumber: 158,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(false),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionBtn,
                                "aria-label": "Close",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChatAssistant.tsx",
                                    lineNumber: 162,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatAssistant.tsx",
                                lineNumber: 161,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatAssistant.tsx",
                        lineNumber: 157,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChatAssistant.tsx",
                lineNumber: 147,
                columnNumber: 13
            }, this),
            !isMinimized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messages,
                        ref: scrollRef,
                        children: [
                            messages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][msg.role]}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bubble,
                                        children: [
                                            msg.content,
                                            msg.actions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionCards,
                                                children: msg.actions.map((action, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: action.path,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionCard,
                                                        onClick: ()=>setIsOpen(false),
                                                        children: action.label
                                                    }, idx, false, {
                                                        fileName: "[project]/src/components/ChatAssistant.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 49
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatAssistant.tsx",
                                                lineNumber: 175,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChatAssistant.tsx",
                                        lineNumber: 172,
                                        columnNumber: 33
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/src/components/ChatAssistant.tsx",
                                    lineNumber: 171,
                                    columnNumber: 29
                                }, this)),
                            isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].assistant}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bubble} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].typing}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChatAssistant.tsx",
                                            lineNumber: 194,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChatAssistant.tsx",
                                            lineNumber: 195,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChatAssistant.tsx",
                                            lineNumber: 196,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ChatAssistant.tsx",
                                    lineNumber: 193,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatAssistant.tsx",
                                lineNumber: 192,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatAssistant.tsx",
                        lineNumber: 169,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputArea,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: t('inputPlaceholder') || "Type a message...",
                                value: input,
                                onChange: (e)=>setInput(e.target.value),
                                onKeyPress: (e)=>e.key === 'Enter' && handleSend(),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatAssistant.tsx",
                                lineNumber: 203,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSend,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sendBtn,
                                disabled: !input.trim(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChatAssistant.tsx",
                                    lineNumber: 212,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatAssistant.tsx",
                                lineNumber: 211,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatAssistant.tsx",
                        lineNumber: 202,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChatAssistant.tsx",
        lineNumber: 146,
        columnNumber: 9
    }, this);
}
_s(ChatAssistant, "aaFn2DF+1E+D8ZpalcqH+gWlymE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ChatAssistant;
var _c;
__turbopack_context__.k.register(_c, "ChatAssistant");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GlobalOverlays.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalOverlays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouteTransitionLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RouteTransitionLoader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChatAssistant.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function GlobalOverlays() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouteTransitionLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/GlobalOverlays.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatAssistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/GlobalOverlays.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_c = GlobalOverlays;
var _c;
__turbopack_context__.k.register(_c, "GlobalOverlays");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "Navbar-module__cJzEcG__actions",
  "active": "Navbar-module__cJzEcG__active",
  "container": "Navbar-module__cJzEcG__container",
  "desktopLinks": "Navbar-module__cJzEcG__desktopLinks",
  "link": "Navbar-module__cJzEcG__link",
  "logo": "Navbar-module__cJzEcG__logo",
  "logoIcon": "Navbar-module__cJzEcG__logoIcon",
  "logoText": "Navbar-module__cJzEcG__logoText",
  "mainNav": "Navbar-module__cJzEcG__mainNav",
  "menuToggle": "Navbar-module__cJzEcG__menuToggle",
  "mobileActions": "Navbar-module__cJzEcG__mobileActions",
  "mobileLinks": "Navbar-module__cJzEcG__mobileLinks",
  "mobileOpen": "Navbar-module__cJzEcG__mobileOpen",
  "navbar": "Navbar-module__cJzEcG__navbar",
  "signinBtn": "Navbar-module__cJzEcG__signinBtn",
});
}),
"[project]/src/components/LanguageSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ToastContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LanguageSwitcher() {
    _s();
    const { locale, setLocale, availableLocales } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const tCommon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])("common");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "group",
        "aria-label": "Language selector",
        style: {
            display: "inline-flex",
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: 9999,
            padding: 2,
            gap: 2,
            backdropFilter: "blur(10px)"
        },
        children: availableLocales.map((l)=>{
            const active = l.locale === locale;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>{
                    if (l.locale === locale) return;
                    setLocale(l.locale);
                    showToast(tCommon("toast.languageUpdated"), "info");
                    router.refresh();
                },
                "aria-label": l.label,
                title: l.label,
                "aria-pressed": active,
                style: {
                    width: 36,
                    height: 32,
                    borderRadius: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    lineHeight: 1,
                    background: active ? "rgba(123, 159, 182, 0.18)" : "transparent",
                    border: active ? "1px solid rgba(123, 159, 182, 0.55)" : "1px solid transparent",
                    color: "var(--text-primary)",
                    transition: "var(--transition-smooth)",
                    transform: active ? "translateY(-0.5px)" : "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": "true",
                    style: {
                        filter: "saturate(1.05)"
                    },
                    children: l.flag
                }, void 0, false, {
                    fileName: "[project]/src/components/LanguageSwitcher.tsx",
                    lineNumber: 59,
                    columnNumber: 25
                }, this)
            }, l.locale, false, {
                fileName: "[project]/src/components/LanguageSwitcher.tsx",
                lineNumber: 31,
                columnNumber: 21
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/LanguageSwitcher.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
_s(LanguageSwitcher, "j/7CUNg38vGWHyGY8O7MfUbYgVE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const isAuthenticated = !!session;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])('common');
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            path: '/',
            label: 'nav.home'
        },
        {
            path: '/coaches',
            label: 'nav.coaches'
        },
        {
            path: '/community',
            label: 'nav.community'
        },
        {
            path: '/resources',
            label: 'nav.resources'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbar,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainNav,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/branding/heart.png",
                                    alt: "Logo",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoIcon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 31,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoText,
                                    children: "The Support Network"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 32,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].desktopLinks,
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.path,
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link} ${pathname === item.path ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                    children: t(item.label)
                                }, item.path, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 37,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this),
                        !isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/signin",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signinBtn,
                            children: t('nav.signIn')
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 51,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signinBtn,
                            title: t('nav.signOut') || "Sign Out",
                            children: t('nav.signOut') || "Sign Out"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 55,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuToggle,
                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                    "aria-label": "Toggle menu",
                    children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 71,
                        columnNumber: 35
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 71,
                        columnNumber: 53
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileLinks} ${isMenuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileOpen : ''}`,
                    children: [
                        navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.path,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link} ${pathname === item.path ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                onClick: ()=>setIsMenuOpen(false),
                                children: t(item.label)
                            }, item.path, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 77,
                                columnNumber: 25
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, this),
                                !isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/signin",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signinBtn,
                                    onClick: ()=>setIsMenuOpen(false),
                                    children: t('nav.signIn')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 89,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])();
                                        setIsMenuOpen(false);
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signinBtn,
                                    children: t('nav.signOut') || "Sign Out"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 93,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 75,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 28,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
_s(Navbar, "rrWACCnZIZnhdpxCHAtP0CR9IzA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_47b3962b._.js.map