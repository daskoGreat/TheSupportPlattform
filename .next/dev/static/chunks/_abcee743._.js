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

__turbopack_context__.v({"appName":"The Support Network","nav":{"back":"Back","home":"Home","community":"Community","findCoach":"Find a coach"},"loading":{"loading":"Loading...","saving":"Saving...","sending":"Sending...","signingIn":"Signing in..."},"empty":{"none":"Nothing here yet"},"actions":{"continue":"Continue","save":"Save","update":"Update","close":"Close"},"labels":{"unknownUser":"Unknown user"},"pages":{"coaches":{"title":"Our specialized coaches","subtitle":"Find the right person to support you on your journey."}},"toast":{"actionFailed":"Could not complete the action","messageSent":"Message sent","bookingAccepted":"Booking accepted","bookingDeclined":"Booking declined","profileSaved":"Profile saved","languageUpdated":"Language updated"}});}),
"[project]/src/locales/en/auth.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"signIn":{"title":"Welcome back","subtitle":"Sign in to your account","email":"Email","password":"Password","button":"Sign in","buttonLoading":"Signing in...","errorInvalid":"Wrong email or password","errorGeneric":"Something went wrong. Please try again.","noAccount":"Not a member yet?","joinNow":"Join now","backHome":"Back to home"},"register":{"title":"Create account","subtitle":"Start your journey today","roleUser":"I’m looking for support","roleCoach":"I’m a coach","name":"Name","email":"Email","password":"Password","coachNote":"As a coach, you will complete your profile after registration.","button":"Create account","buttonLoading":"Creating account...","alreadyMember":"Already a member?","signIn":"Sign in here","backHome":"Back to home","errorGeneric":"Registration failed"}});}),
"[project]/src/locales/en/home.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Welcome to The Support Network!","join":"Click here to join","alreadyMember":"Already a member?","signIn":"Sign In"});}),
"[project]/src/locales/en/intake.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"assistantGreeting":"Hi. I’m here to help you find the right support. Tell me a bit about what you’re going through right now.","thinking":"Finding the right support for you...","inputPlaceholder":"Describe what you want support with...","coachesTitle":"Coaches","communityTitle":"Community","viewProfile":"View profile","startChat":"Start chat","bookSession":"Book session","explore":"Explore","errorGeneric":"Something went wrong. Please try again."});}),
"[project]/src/locales/en/coach.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"dashboard":{"title":"Coach overview","messages":"Messages","bookings":"Bookings","summary":{"newMessages":"New messages","todayBookings":"Today's bookings","pendingRequests":"Pending requests","upcoming":"Upcoming sessions"},"emptyMessages":"No new messages","emptyBookings":"No pending or upcoming bookings","backToList":"Back to list","replyPlaceholder":"Write a message...","reply":"Reply","pendingTitle":"Pending requests","todayTitle":"Today's sessions","upcomingTitle":"Upcoming","accept":"Accept","decline":"Decline","status":{"pending":"Pending","confirmed":"Confirmed","declined":"Declined"}},"publicProfile":{"title":"Coach profile","selectFirst":"Please select a coach from the matching page first.","toMatching":"Go to matching","aboutMe":"About me","aboutBody":"I’m dedicated to supporting people in situations similar to yours. My focus is to create a safe and supportive space where we can explore solutions together.","privacyNote":"Your privacy matters. All conversations and bookings are encrypted and secure.","startChat":"Start chat","book":"Book a session"},"profile":{"createTitle":"Create your coach profile","editTitle":"Edit coach profile","createSubtitle":"You need to complete your coach profile before you can use your dashboard.","editSubtitle":"Update your information so the right people can find you.","noticeTitle":"You need to complete your coach profile","noticeBody":"Add an image, name and a short description to get started.","avatar":"Profile image","name":"Name","title":"Title","shortDescription":"Short description","longBio":"Long bio (optional)","specialties":"Specialties (optional)","languages":"Languages (optional)","years":"Years of experience (optional)","avatarHelper":"Paste a secure image URL. You’ll see a preview immediately.","avatarPlaceholder":"Profile image URL (https://...)","namePlaceholder":"Your full name","titlePlaceholder":"For example: Stress coach, Life coach...","shortPlaceholder":"Briefly describe who you are and how you support your clients.","longPlaceholder":"Share more about your background, approach and what matters in your sessions.","specialtiesPlaceholder":"For example: stress, burnout, relationships (comma separated)","languagesPlaceholder":"For example: English, Swedish","defaultLanguage":"English","yearsPlaceholder":"For example: 5","save":"Save profile","update":"Update profile","saving":"Saving...","validation":{"image":"Add a profile image","name":"Enter your name","short":"Write a short description"}}});}),
"[project]/src/locales/en/chat.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"initialCoachMessage":"Hi! I see you matched with me. How are you feeling today?","header":{"online":"Online","defaultCoach":"Your coach"},"disclaimer":"This is a private conversation between you and your coach.","emptyTitle":"Your conversation starts here.","emptySubtitle":"Write a message to start the conversation.","inputPlaceholder":"Write a message to your coach...","bookBar":"Feels right?","bookCta":"Book a session"});}),
"[project]/src/locales/en/bookings.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"book":{"title":"Book a session with {{name}}","step1":"1. Choose session type","step2":"2. Choose an available time","confirm":"Confirm booking","video":"Video session","phone":"Phone session","videoSub":"Via our secure link","phoneSub":"Your coach will call you","successTitle":"Booked!","successBody":"You booked a {{type}} with {{name}}.","detailsTime":"Time","detailsType":"Type","tomorrowAt":"Tomorrow at {{time}}","backHome":"Back to home"}});}),
"[project]/src/locales/en/community.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Community","searchPlaceholder":"Search groups or topics...","heroTitle":"Find your community","heroBody":"You’re not alone. Share experiences and find support from others in similar situations.","popular":"Popular groups","join":"Join","newDiscussions":"New discussions","needHelpTitle":"Need to talk to someone right now?","needHelpBody":"Our coaches are here for you.","findCoach":"Find a coach","discussion1":"How do you handle morning anxiety?","discussion1Meta":"In Stress & recovery","discussion2":"Any book recommendations about grief?","discussion2Meta":"In Life transitions"});}),
"[project]/src/locales/en/admin.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Admin","overview":"Overview","users":"Users","coaches":"Coaches","bookings":"Bookings","messages":"Messages","platformOverview":"Platform overview","recentBookings":"Recent bookings","viewAll":"View all","table":{"user":"User","coach":"Coach","time":"Time","status":"Status"},"statusConfirmed":"Confirmed","statusPending":"Pending","statusCancelled":"Cancelled","searchUsers":"Search users...","searchBookings":"Search bookings...","settings":"Settings","manageUsersDescription":"Manage registered users and their permissions.","manageBookingsDescription":"View and manage all session bookings.","platformSettingsDescription":"Configure platform-wide settings and preferences.","sample":{"timeTomorrow":"Tomorrow 10:30"}});}),
"[project]/src/locales/en/howItWorks.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"How The Support Network Works","intro":"We designed this platform to be as simple and supportive as possible. You shouldn’t have to navigate complex systems when you’re overwhelmed.","s1Title":"1. Share what’s on your mind","s1Body":"Our AI intake assistant isn’t a therapist — it’s a guide. It helps you express what you’re going through so we can find the right human support for you.","s2Title":"2. Choose your coach","s2Body":"Based on your conversation, we suggest 3–5 coaches who specialize in your situation. Read their profiles and choose who you feel most comfortable with.","s3Title":"3. Start a conversation","s3Body":"Message your coach directly. If it feels right, book a video or phone session whenever you’re ready."});}),
"[project]/src/locales/sv/common.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"appName":"The Support Network","nav":{"back":"Tillbaka","home":"Start","community":"Community","findCoach":"Hitta en coach"},"loading":{"loading":"Laddar...","saving":"Sparar...","sending":"Skickar...","signingIn":"Loggar in..."},"empty":{"none":"Inget här ännu"},"actions":{"continue":"Fortsätt","save":"Spara","update":"Uppdatera","close":"Stäng"},"labels":{"unknownUser":"Okänd användare"},"pages":{"coaches":{"title":"Våra specialiserade coacher","subtitle":"Hitta rätt person som kan stötta dig på din resa."}},"toast":{"actionFailed":"Kunde inte genomföra åtgärden","messageSent":"Meddelandet skickades","bookingAccepted":"Bokningen accepterades","bookingDeclined":"Bokningen avböjdes","profileSaved":"Profilen sparades","languageUpdated":"Språket uppdaterades"}});}),
"[project]/src/locales/sv/auth.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"signIn":{"title":"Välkommen tillbaka","subtitle":"Logga in på ditt konto","email":"E-post","password":"Lösenord","button":"Logga in","buttonLoading":"Loggar in...","errorInvalid":"Fel e-post eller lösenord","errorGeneric":"Något gick fel. Försök igen.","noAccount":"Ingen medlem än?","joinNow":"Gå med nu","backHome":"Tillbaka till start"},"register":{"title":"Skapa konto","subtitle":"Börja din resa idag","roleUser":"Jag söker stöd","roleCoach":"Jag är coach","name":"Namn","email":"E-post","password":"Lösenord","coachNote":"Som coach kommer du fylla i din profil efter registrering.","button":"Gå med nu","buttonLoading":"Skapar konto...","alreadyMember":"Redan medlem?","signIn":"Logga in här","backHome":"Tillbaka till start","errorGeneric":"Registreringen misslyckades"}});}),
"[project]/src/locales/sv/home.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Välkommen till The Support Network!","join":"Klicka här för att gå med","alreadyMember":"Redan medlem?","signIn":"Logga in"});}),
"[project]/src/locales/sv/intake.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"assistantGreeting":"Hej. Jag är här för att hjälpa dig hitta rätt stöd. Berätta lite om vad du går igenom just nu.","thinking":"Letar efter rätt stöd för dig...","inputPlaceholder":"Beskriv vad du vill ha stöd med...","coachesTitle":"Coacher","communityTitle":"Community","viewProfile":"Visa profil","startChat":"Starta chatt","bookSession":"Boka tid","explore":"Utforska","errorGeneric":"Något gick fel. Försök igen."});}),
"[project]/src/locales/sv/coach.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"dashboard":{"title":"Coachöversikt","messages":"Meddelanden","bookings":"Bokningar","summary":{"newMessages":"Nya meddelanden","todayBookings":"Dagens bokningar","pendingRequests":"Väntande förfrågningar","upcoming":"Kommande samtal"},"emptyMessages":"Inga nya meddelanden","emptyBookings":"Inga väntande eller kommande bokningar","backToList":"Tillbaka till listan","replyPlaceholder":"Skriv ett meddelande...","reply":"Svara","pendingTitle":"Väntande förfrågningar","todayTitle":"Dagens samtal","upcomingTitle":"Kommande","accept":"Acceptera","decline":"Avböj","status":{"pending":"Väntar","confirmed":"Bekräftad","declined":"Avböjd"}},"publicProfile":{"title":"Coachprofil","selectFirst":"Vänligen välj en coach från matchningssidan först.","toMatching":"Till matchningen","aboutMe":"Om mig","aboutBody":"Jag är dedikerad till att hjälpa personer i liknande situationer som din. Mitt fokus ligger på att skapa en trygg och stöttande miljö där vi kan utforska lösningar tillsammans.","privacyNote":"Din integritet är viktig. Alla samtal och bokningar är krypterade och säkra.","startChat":"Starta chatt","book":"Boka tid"},"profile":{"createTitle":"Skapa din coachprofil","editTitle":"Redigera coachprofil","createSubtitle":"Du behöver först slutföra din coachprofil innan du kan använda din coachöversikt.","editSubtitle":"Uppdatera din information så att rätt personer hittar dig.","noticeTitle":"Du behöver först slutföra din coachprofil","noticeBody":"Lägg till bild, namn och en kort beskrivning för att komma igång.","avatar":"Profilbild","name":"Namn","title":"Titel","shortDescription":"Kort beskrivning","longBio":"Längre presentation (valfritt)","specialties":"Specialiseringar (valfritt)","languages":"Språk (valfritt)","years":"År av erfarenhet (valfritt)","avatarHelper":"Klistra in en säker bildlänk. Du ser en förhandsvisning direkt.","avatarPlaceholder":"Länk till profilbild (https://...)","namePlaceholder":"Ditt fullständiga namn","titlePlaceholder":"Till exempel: Stresscoach, Samtalscoach...","shortPlaceholder":"Beskriv kort vem du är och hur du stöttar dina klienter.","longPlaceholder":"Berätta mer om din bakgrund, ditt arbetssätt och vad som är viktigt i dina samtal.","specialtiesPlaceholder":"Till exempel: stress, utmattning, relationer (kommaseparerat)","languagesPlaceholder":"Till exempel: Svenska, Engelska","defaultLanguage":"Svenska","yearsPlaceholder":"Till exempel: 5","save":"Spara profil","update":"Uppdatera profil","saving":"Sparar...","validation":{"image":"Lägg till en profilbild","name":"Fyll i ditt namn","short":"Skriv en kort beskrivning"}}});}),
"[project]/src/locales/sv/chat.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"initialCoachMessage":"Hej! Jag ser att du matchades med mig. Hur mår du idag?","header":{"online":"Online","defaultCoach":"Din coach"},"disclaimer":"Det här är ett privat samtal mellan dig och din coach.","emptyTitle":"Din konversation börjar här.","emptySubtitle":"Skriv ett meddelande för att starta samtalet.","inputPlaceholder":"Skriv ett meddelande till din coach...","bookBar":"Känns det rätt?","bookCta":"Boka ett samtal"});}),
"[project]/src/locales/sv/bookings.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"book":{"title":"Boka tid med {{name}}","step1":"1. Välj typ av samtal","step2":"2. Välj en ledig tid","confirm":"Bekräfta bokning","video":"Videosamtal","phone":"Telefonsamtal","videoSub":"Via vår säkra länk","phoneSub":"Coachen ringer upp dig","successTitle":"Bokad och klar!","successBody":"Du har bokat ett {{type}} med {{name}}.","detailsTime":"Tid","detailsType":"Typ","tomorrowAt":"Imorgon kl {{time}}","backHome":"Tillbaka till start"}});}),
"[project]/src/locales/sv/community.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Community","searchPlaceholder":"Sök grupper eller ämnen...","heroTitle":"Hitta din gemenskap","heroBody":"Du är inte ensam. Här kan du dela erfarenheter och hitta stöd hos andra i liknande situationer.","popular":"Populära grupper","join":"Gå med","newDiscussions":"Nya diskussioner","needHelpTitle":"Behöver du prata med någon direkt?","needHelpBody":"Våra coacher finns här för dig.","findCoach":"Hitta en coach","discussion1":"Hur hanterar ni morgonångest?","discussion1Meta":"I Stress & återhämtning","discussion2":"Tips på bra böcker om sorg?","discussion2Meta":"I Livsförändringar"});}),
"[project]/src/locales/sv/admin.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Admin","overview":"Översikt","users":"Användare","coaches":"Coacher","bookings":"Bokningar","messages":"Meddelanden","platformOverview":"Plattformens översikt","recentBookings":"Senaste bokningarna","viewAll":"Visa alla","table":{"user":"Användare","coach":"Coach","time":"Tid","status":"Status"},"statusConfirmed":"Bekräftad","statusPending":"Väntande","statusCancelled":"Avbokad","searchUsers":"Sök användare...","searchBookings":"Sök bokningar...","settings":"Inställningar","manageUsersDescription":"Hantera registrerade användare och deras behörigheter.","manageBookingsDescription":"Visa och hantera alla sessionsbokningar.","platformSettingsDescription":"Konfigurera plattformens inställningar och preferenser.","sample":{"timeTomorrow":"Imorgon 10:30"}});}),
"[project]/src/locales/sv/howItWorks.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Så fungerar The Support Network","intro":"Vi har utformat plattformen för att vara så enkel och stöttande som möjligt. Du ska inte behöva navigera komplexa system när du redan har det tufft.","s1Title":"1. Dela det som känns viktigt","s1Body":"Vår AI‑assistent är ingen terapeut — den är en guide. Den hjälper dig att sätta ord på det du går igenom så att vi kan hitta rätt mänskligt stöd för dig.","s2Title":"2. Välj din coach","s2Body":"Utifrån samtalet föreslår vi 3–5 coacher som är specialiserade på din situation. Läs profilerna och välj den du känner dig mest bekväm med.","s3Title":"3. Starta en konversation","s3Body":"Meddela din coach direkt. Om det känns rätt kan du boka ett video- eller telefonsamtal när du är redo."});}),
"[project]/src/locales/es/common.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"appName":"The Support Network","nav":{"back":"Volver","home":"Inicio","community":"Comunidad","findCoach":"Encontrar un coach"},"loading":{"loading":"Cargando...","saving":"Guardando...","sending":"Enviando...","signingIn":"Iniciando sesión..."},"empty":{"none":"Aún no hay nada aquí"},"actions":{"continue":"Continuar","save":"Guardar","update":"Actualizar","close":"Cerrar"},"labels":{"unknownUser":"Usuario desconocido"},"pages":{"coaches":{"title":"Nuestros coaches especializados","subtitle":"Encuentra a la persona adecuada para acompañarte en tu camino."}},"toast":{"actionFailed":"No se pudo completar la acción","messageSent":"Mensaje enviado","bookingAccepted":"Reserva aceptada","bookingDeclined":"Reserva rechazada","profileSaved":"Perfil guardado","languageUpdated":"Idioma actualizado"}});}),
"[project]/src/locales/es/auth.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"signIn":{"title":"Bienvenido de nuevo","subtitle":"Inicia sesión en tu cuenta","email":"Correo electrónico","password":"Contraseña","button":"Iniciar sesión","buttonLoading":"Iniciando sesión...","errorInvalid":"Correo o contraseña incorrectos","errorGeneric":"Algo salió mal. Inténtalo de nuevo.","noAccount":"¿Aún no eres miembro?","joinNow":"Únete ahora","backHome":"Volver al inicio"},"register":{"title":"Crear cuenta","subtitle":"Empieza tu camino hoy","roleUser":"Busco apoyo","roleCoach":"Soy coach","name":"Nombre","email":"Correo electrónico","password":"Contraseña","coachNote":"Como coach, completarás tu perfil después del registro.","button":"Crear cuenta","buttonLoading":"Creando cuenta...","alreadyMember":"¿Ya eres miembro?","signIn":"Inicia sesión aquí","backHome":"Volver al inicio","errorGeneric":"El registro falló"}});}),
"[project]/src/locales/es/home.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"¡Bienvenido a The Support Network!","join":"Haz clic aquí para unirte","alreadyMember":"¿Ya eres miembro?","signIn":"Iniciar sesión"});}),
"[project]/src/locales/es/intake.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"assistantGreeting":"Hola. Estoy aquí para ayudarte a encontrar el apoyo adecuado. Cuéntame un poco sobre lo que estás viviendo ahora.","thinking":"Buscando el apoyo adecuado para ti...","inputPlaceholder":"Describe en qué quieres apoyo...","coachesTitle":"Coaches","communityTitle":"Comunidad","viewProfile":"Ver perfil","startChat":"Iniciar chat","bookSession":"Reservar sesión","explore":"Explorar","errorGeneric":"Algo salió mal. Inténtalo de nuevo."});}),
"[project]/src/locales/es/coach.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"dashboard":{"title":"Panel del coach","messages":"Mensajes","bookings":"Reservas","summary":{"newMessages":"Nuevos mensajes","todayBookings":"Reservas de hoy","pendingRequests":"Solicitudes pendientes","upcoming":"Sesiones próximas"},"emptyMessages":"No hay mensajes nuevos","emptyBookings":"No hay reservas pendientes o próximas","backToList":"Volver a la lista","replyPlaceholder":"Escribe un mensaje...","reply":"Responder","pendingTitle":"Solicitudes pendientes","todayTitle":"Sesiones de hoy","upcomingTitle":"Próximas","accept":"Aceptar","decline":"Rechazar","status":{"pending":"Pendiente","confirmed":"Confirmada","declined":"Rechazada"}},"publicProfile":{"title":"Perfil del coach","selectFirst":"Por favor, primero elige un coach en la página de matching.","toMatching":"Ir al matching","aboutMe":"Sobre mí","aboutBody":"Estoy dedicado a apoyar a personas en situaciones similares a la tuya. Mi objetivo es crear un espacio seguro y cercano donde podamos explorar soluciones juntos.","privacyNote":"Tu privacidad importa. Todas las conversaciones y reservas están cifradas y seguras.","startChat":"Iniciar chat","book":"Reservar sesión"},"profile":{"createTitle":"Crea tu perfil de coach","editTitle":"Editar perfil de coach","createSubtitle":"Necesitas completar tu perfil antes de usar el panel.","editSubtitle":"Actualiza tu información para que las personas correctas te encuentren.","noticeTitle":"Necesitas completar tu perfil de coach","noticeBody":"Añade una imagen, tu nombre y una descripción corta para empezar.","avatar":"Imagen de perfil","name":"Nombre","title":"Título","shortDescription":"Descripción corta","longBio":"Biografía larga (opcional)","specialties":"Especialidades (opcional)","languages":"Idiomas (opcional)","years":"Años de experiencia (opcional)","avatarHelper":"Pega una URL segura. Verás una vista previa al instante.","avatarPlaceholder":"URL de imagen de perfil (https://...)","namePlaceholder":"Tu nombre completo","titlePlaceholder":"Por ejemplo: Coach de estrés, Coach de vida...","shortPlaceholder":"Describe brevemente quién eres y cómo ayudas a tus clientes.","longPlaceholder":"Cuenta más sobre tu experiencia, tu enfoque y lo que importa en tus sesiones.","specialtiesPlaceholder":"Por ejemplo: estrés, burnout, relaciones (separado por comas)","languagesPlaceholder":"Por ejemplo: Español, Inglés","defaultLanguage":"Español","yearsPlaceholder":"Por ejemplo: 5","save":"Guardar perfil","update":"Actualizar perfil","saving":"Guardando...","validation":{"image":"Añade una imagen de perfil","name":"Escribe tu nombre","short":"Escribe una descripción corta"}}});}),
"[project]/src/locales/es/chat.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"initialCoachMessage":"¡Hola! Veo que has hecho match conmigo. ¿Cómo te sientes hoy?","header":{"online":"En línea","defaultCoach":"Tu coach"},"disclaimer":"Esta es una conversación privada entre tú y tu coach.","emptyTitle":"Tu conversación empieza aquí.","emptySubtitle":"Escribe un mensaje para comenzar.","inputPlaceholder":"Escribe un mensaje a tu coach...","bookBar":"¿Se siente bien?","bookCta":"Reservar una sesión"});}),
"[project]/src/locales/es/bookings.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"book":{"title":"Reserva una sesión con {{name}}","step1":"1. Elige el tipo de sesión","step2":"2. Elige un horario disponible","confirm":"Confirmar reserva","video":"Sesión por video","phone":"Sesión por teléfono","videoSub":"A través de nuestro enlace seguro","phoneSub":"El coach te llamará","successTitle":"¡Reserva confirmada!","successBody":"Reservaste una {{type}} con {{name}}.","detailsTime":"Hora","detailsType":"Tipo","tomorrowAt":"Mañana a las {{time}}","backHome":"Volver al inicio"}});}),
"[project]/src/locales/es/community.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Comunidad","searchPlaceholder":"Buscar grupos o temas...","heroTitle":"Encuentra tu comunidad","heroBody":"No estás solo. Comparte experiencias y encuentra apoyo de otras personas en situaciones similares.","popular":"Grupos populares","join":"Unirse","newDiscussions":"Nuevas conversaciones","needHelpTitle":"¿Necesitas hablar con alguien ahora?","needHelpBody":"Nuestros coaches están aquí para ti.","findCoach":"Encontrar un coach","discussion1":"¿Cómo manejan la ansiedad por la mañana?","discussion1Meta":"En Estrés y recuperación","discussion2":"¿Recomendaciones de libros sobre duelo?","discussion2Meta":"En Transiciones de vida"});}),
"[project]/src/locales/es/admin.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Admin","overview":"Resumen","users":"Usuarios","coaches":"Coaches","bookings":"Reservas","messages":"Mensajes","platformOverview":"Resumen de la plataforma","recentBookings":"Reservas recientes","viewAll":"Ver todo","table":{"user":"Usuario","coach":"Coach","time":"Hora","status":"Estado"},"statusConfirmed":"Confirmada","statusPending":"Pendiente","statusCancelled":"Cancelada","searchUsers":"Buscar usuarios...","searchBookings":"Buscar reservas...","settings":"Ajustes","manageUsersDescription":"Administrar usuarios registrados y sus permisos.","manageBookingsDescription":"Ver y gestionar todas las reservas de sesiones.","platformSettingsDescription":"Configurar los ajustes y preferencias de toda la plataforma.","sample":{"timeTomorrow":"Mañana 10:30"}});}),
"[project]/src/locales/es/howItWorks.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Cómo funciona The Support Network","intro":"Diseñamos esta plataforma para que sea lo más simple y humana posible. No deberías tener que navegar sistemas complejos cuando te sientes abrumado.","s1Title":"1. Comparte lo que tienes en mente","s1Body":"Nuestro asistente de admisión con IA no es un terapeuta — es una guía. Te ayuda a expresar lo que estás viviendo para encontrar el apoyo humano adecuado.","s2Title":"2. Elige tu coach","s2Body":"Según tu conversación, sugerimos 3–5 coaches especializados en tu situación. Lee sus perfiles y elige con quién te sientas más cómodo.","s3Title":"3. Inicia una conversación","s3Body":"Envía mensajes a tu coach. Si se siente bien, reserva una sesión por video o teléfono cuando estés listo."});}),
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
        howItWorks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$en$2f$howItWorks$2e$json__$28$json$29$__["default"]
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
        howItWorks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$sv$2f$howItWorks$2e$json__$28$json$29$__["default"]
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
        howItWorks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$es$2f$howItWorks$2e$json__$28$json$29$__["default"]
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
    const resources = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LanguageProvider.useMemo[resources]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$resources$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResources"])(locale)
    }["LanguageProvider.useMemo[resources]"], [
        locale
    ]);
    const fallbackResources = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LanguageProvider.useMemo[fallbackResources]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$resources$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResources"])("en")
    }["LanguageProvider.useMemo[fallbackResources]"], []);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LanguageProvider.useMemo[t]": ()=>{
            return ({
                "LanguageProvider.useMemo[t]": (key, vars)=>{
                    const [ns, rest] = key.includes(":") ? key.split(":") : [
                        "common",
                        key
                    ];
                    const nsTyped = ns || "common";
                    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNestedValue"])(resources[nsTyped], rest) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNestedValue"])(fallbackResources[nsTyped], rest) ?? key;
                    if (typeof value !== "string") return key;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(value, vars);
                }
            })["LanguageProvider.useMemo[t]"];
        }
    }["LanguageProvider.useMemo[t]"], [
        resources,
        fallbackResources
    ]);
    const tn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LanguageProvider.useMemo[tn]": ()=>{
            return ({
                "LanguageProvider.useMemo[tn]": (ns)=>({
                        "LanguageProvider.useMemo[tn]": (key, vars)=>t(`${ns}:${key}`, vars)
                    })["LanguageProvider.useMemo[tn]"]
            })["LanguageProvider.useMemo[tn]"];
        }
    }["LanguageProvider.useMemo[tn]"], [
        t
    ]);
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
        lineNumber: 101,
        columnNumber: 12
    }, this);
}
_s(LanguageProvider, "HpOrB4TiOqviky2dPSDeTjwfJN0=");
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
"[project]/src/i18n/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useT",
    ()=>useT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useT(ns) {
    _s();
    const { t, tn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    return ns ? tn(ns) : t;
}
_s(useT, "tup7FwBWkRI3mxJdA+ZSDykcDIg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LanguageSwitcher() {
    _s();
    const { locale, setLocale, availableLocales } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const tCommon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])("common");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "group",
        "aria-label": "Language selector",
        style: {
            display: "inline-flex",
            background: "rgba(17, 22, 29, 0.85)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: 9999,
            padding: 4,
            gap: 4,
            backdropFilter: "blur(10px)",
            boxShadow: "0 12px 35px rgba(0,0,0,0.55)"
        },
        children: availableLocales.map((l)=>{
            const active = l.locale === locale;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>{
                    if (l.locale === locale) return;
                    setLocale(l.locale);
                    showToast(tCommon("toast.languageUpdated"), "info");
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
                    lineNumber: 57,
                    columnNumber: 25
                }, this)
            }, l.locale, false, {
                fileName: "[project]/src/components/LanguageSwitcher.tsx",
                lineNumber: 30,
                columnNumber: 21
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/LanguageSwitcher.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
_s(LanguageSwitcher, "eazaaWL4dNfyEKAFKjYliKjZaBs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"]
    ];
});
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
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
"[project]/src/components/GlobalOverlays.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalOverlays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouteTransitionLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RouteTransitionLoader.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function GlobalOverlays() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouteTransitionLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/GlobalOverlays.tsx",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: 16,
                    right: 16,
                    zIndex: 50
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/GlobalOverlays.tsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/GlobalOverlays.tsx",
                lineNumber: 10,
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
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next-auth/node_modules/@auth/core/errors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Base error class for all Auth.js errors.
 * It's optimized to be printed in the server logs in a nicely formatted way
 * via the [`logger.error`](https://authjs.dev/reference/core#logger) option.
 * @noInheritDoc
 */ __turbopack_context__.s([
    "AccessDenied",
    ()=>AccessDenied,
    "AccountNotLinked",
    ()=>AccountNotLinked,
    "AdapterError",
    ()=>AdapterError,
    "AuthError",
    ()=>AuthError,
    "CallbackRouteError",
    ()=>CallbackRouteError,
    "CredentialsSignin",
    ()=>CredentialsSignin,
    "DuplicateConditionalUI",
    ()=>DuplicateConditionalUI,
    "EmailSignInError",
    ()=>EmailSignInError,
    "ErrorPageLoop",
    ()=>ErrorPageLoop,
    "EventError",
    ()=>EventError,
    "ExperimentalFeatureNotEnabled",
    ()=>ExperimentalFeatureNotEnabled,
    "InvalidCallbackUrl",
    ()=>InvalidCallbackUrl,
    "InvalidCheck",
    ()=>InvalidCheck,
    "InvalidEndpoints",
    ()=>InvalidEndpoints,
    "InvalidProvider",
    ()=>InvalidProvider,
    "JWTSessionError",
    ()=>JWTSessionError,
    "MissingAdapter",
    ()=>MissingAdapter,
    "MissingAdapterMethods",
    ()=>MissingAdapterMethods,
    "MissingAuthorize",
    ()=>MissingAuthorize,
    "MissingCSRF",
    ()=>MissingCSRF,
    "MissingSecret",
    ()=>MissingSecret,
    "MissingWebAuthnAutocomplete",
    ()=>MissingWebAuthnAutocomplete,
    "OAuthAccountNotLinked",
    ()=>OAuthAccountNotLinked,
    "OAuthCallbackError",
    ()=>OAuthCallbackError,
    "OAuthProfileParseError",
    ()=>OAuthProfileParseError,
    "OAuthSignInError",
    ()=>OAuthSignInError,
    "SessionTokenError",
    ()=>SessionTokenError,
    "SignInError",
    ()=>SignInError,
    "SignOutError",
    ()=>SignOutError,
    "UnknownAction",
    ()=>UnknownAction,
    "UnsupportedStrategy",
    ()=>UnsupportedStrategy,
    "UntrustedHost",
    ()=>UntrustedHost,
    "Verification",
    ()=>Verification,
    "WebAuthnVerificationError",
    ()=>WebAuthnVerificationError,
    "isClientError",
    ()=>isClientError
]);
class AuthError extends Error {
    /** @internal */ constructor(message, errorOptions){
        if (message instanceof Error) {
            super(undefined, {
                cause: {
                    err: message,
                    ...message.cause,
                    ...errorOptions
                }
            });
        } else if (typeof message === "string") {
            if (errorOptions instanceof Error) {
                errorOptions = {
                    err: errorOptions,
                    ...errorOptions.cause
                };
            }
            super(message, errorOptions);
        } else {
            super(undefined, message);
        }
        this.name = this.constructor.name;
        // @ts-expect-error https://github.com/microsoft/TypeScript/issues/3841
        this.type = this.constructor.type ?? "AuthError";
        // @ts-expect-error https://github.com/microsoft/TypeScript/issues/3841
        this.kind = this.constructor.kind ?? "error";
        Error.captureStackTrace?.(this, this.constructor);
        const url = `https://errors.authjs.dev#${this.type.toLowerCase()}`;
        this.message += `${this.message ? ". " : ""}Read more at ${url}`;
    }
}
class SignInError extends AuthError {
}
/** @internal */ SignInError.kind = "signIn";
class AdapterError extends AuthError {
}
AdapterError.type = "AdapterError";
class AccessDenied extends AuthError {
}
AccessDenied.type = "AccessDenied";
class CallbackRouteError extends AuthError {
}
CallbackRouteError.type = "CallbackRouteError";
class ErrorPageLoop extends AuthError {
}
ErrorPageLoop.type = "ErrorPageLoop";
class EventError extends AuthError {
}
EventError.type = "EventError";
class InvalidCallbackUrl extends AuthError {
}
InvalidCallbackUrl.type = "InvalidCallbackUrl";
class CredentialsSignin extends SignInError {
    constructor(){
        super(...arguments);
        /**
         * The error code that is set in the `code` query parameter of the redirect URL.
         *
         *
         * ⚠ NOTE: This property is going to be included in the URL, so make sure it does not hint at sensitive errors.
         *
         * The full error is always logged on the server, if you need to debug.
         *
         * Generally, we don't recommend hinting specifically if the user had either a wrong username or password specifically,
         * try rather something like "Invalid credentials".
         */ this.code = "credentials";
    }
}
CredentialsSignin.type = "CredentialsSignin";
class InvalidEndpoints extends AuthError {
}
InvalidEndpoints.type = "InvalidEndpoints";
class InvalidCheck extends AuthError {
}
InvalidCheck.type = "InvalidCheck";
class JWTSessionError extends AuthError {
}
JWTSessionError.type = "JWTSessionError";
class MissingAdapter extends AuthError {
}
MissingAdapter.type = "MissingAdapter";
class MissingAdapterMethods extends AuthError {
}
MissingAdapterMethods.type = "MissingAdapterMethods";
class MissingAuthorize extends AuthError {
}
MissingAuthorize.type = "MissingAuthorize";
class MissingSecret extends AuthError {
}
MissingSecret.type = "MissingSecret";
class OAuthAccountNotLinked extends SignInError {
}
OAuthAccountNotLinked.type = "OAuthAccountNotLinked";
class OAuthCallbackError extends SignInError {
}
OAuthCallbackError.type = "OAuthCallbackError";
class OAuthProfileParseError extends AuthError {
}
OAuthProfileParseError.type = "OAuthProfileParseError";
class SessionTokenError extends AuthError {
}
SessionTokenError.type = "SessionTokenError";
class OAuthSignInError extends SignInError {
}
OAuthSignInError.type = "OAuthSignInError";
class EmailSignInError extends SignInError {
}
EmailSignInError.type = "EmailSignInError";
class SignOutError extends AuthError {
}
SignOutError.type = "SignOutError";
class UnknownAction extends AuthError {
}
UnknownAction.type = "UnknownAction";
class UnsupportedStrategy extends AuthError {
}
UnsupportedStrategy.type = "UnsupportedStrategy";
class InvalidProvider extends AuthError {
}
InvalidProvider.type = "InvalidProvider";
class UntrustedHost extends AuthError {
}
UntrustedHost.type = "UntrustedHost";
class Verification extends AuthError {
}
Verification.type = "Verification";
class MissingCSRF extends SignInError {
}
MissingCSRF.type = "MissingCSRF";
const clientErrors = new Set([
    "CredentialsSignin",
    "OAuthAccountNotLinked",
    "OAuthCallbackError",
    "AccessDenied",
    "Verification",
    "MissingCSRF",
    "AccountNotLinked",
    "WebAuthnVerificationError"
]);
function isClientError(error) {
    if (error instanceof AuthError) return clientErrors.has(error.type);
    return false;
}
class DuplicateConditionalUI extends AuthError {
}
DuplicateConditionalUI.type = "DuplicateConditionalUI";
class MissingWebAuthnAutocomplete extends AuthError {
}
MissingWebAuthnAutocomplete.type = "MissingWebAuthnAutocomplete";
class WebAuthnVerificationError extends AuthError {
}
WebAuthnVerificationError.type = "WebAuthnVerificationError";
class AccountNotLinked extends SignInError {
}
AccountNotLinked.type = "AccountNotLinked";
class ExperimentalFeatureNotEnabled extends AuthError {
}
ExperimentalFeatureNotEnabled.type = "ExperimentalFeatureNotEnabled";
}),
"[project]/node_modules/next-auth/lib/client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientSessionError",
    ()=>ClientSessionError,
    "apiBaseUrl",
    ()=>apiBaseUrl,
    "fetchData",
    ()=>fetchData,
    "now",
    ()=>now,
    "parseUrl",
    ()=>parseUrl,
    "useOnline",
    ()=>useOnline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/node_modules/@auth/core/errors.js [app-client] (ecmascript)");
"use client";
;
;
/** @todo */ class ClientFetchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthError"] {
}
class ClientSessionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthError"] {
}
async function fetchData(path, __NEXTAUTH, logger, req = {}) {
    const url = `${apiBaseUrl(__NEXTAUTH)}/${path}`;
    try {
        const options = {
            headers: {
                "Content-Type": "application/json",
                ...req?.headers?.cookie ? {
                    cookie: req.headers.cookie
                } : {}
            }
        };
        if (req?.body) {
            options.body = JSON.stringify(req.body);
            options.method = "POST";
        }
        const res = await fetch(url, options);
        const data = await res.json();
        if (!res.ok) throw data;
        return data;
    } catch (error) {
        logger.error(new ClientFetchError(error.message, error));
        return null;
    }
}
function apiBaseUrl(__NEXTAUTH) {
    if (typeof window === "undefined") {
        // Return absolute path when called server side
        return `${__NEXTAUTH.baseUrlServer}${__NEXTAUTH.basePathServer}`;
    }
    // Return relative path when called client side
    return __NEXTAUTH.basePath;
}
function useOnline() {
    const [isOnline, setIsOnline] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](typeof navigator !== "undefined" ? navigator.onLine : false);
    const setOnline = ()=>setIsOnline(true);
    const setOffline = ()=>setIsOnline(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useOnline.useEffect": ()=>{
            window.addEventListener("online", setOnline);
            window.addEventListener("offline", setOffline);
            return ({
                "useOnline.useEffect": ()=>{
                    window.removeEventListener("online", setOnline);
                    window.removeEventListener("offline", setOffline);
                }
            })["useOnline.useEffect"];
        }
    }["useOnline.useEffect"], []);
    return isOnline;
}
function now() {
    return Math.floor(Date.now() / 1000);
}
function parseUrl(url) {
    const defaultUrl = new URL("http://localhost:3000/api/auth");
    if (url && !url.startsWith("http")) {
        url = `https://${url}`;
    }
    const _url = new URL(url || defaultUrl);
    const path = (_url.pathname === "/" ? defaultUrl.pathname : _url.pathname)// Remove trailing slash
    .replace(/\/$/, "");
    const base = `${_url.origin}${path}`;
    return {
        origin: _url.origin,
        host: _url.host,
        path,
        base,
        toString: ()=>base
    };
}
}),
"[project]/node_modules/next-auth/react.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SessionContext",
    ()=>SessionContext,
    "SessionProvider",
    ()=>SessionProvider,
    "__NEXTAUTH",
    ()=>__NEXTAUTH,
    "getCsrfToken",
    ()=>getCsrfToken,
    "getProviders",
    ()=>getProviders,
    "getSession",
    ()=>getSession,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut,
    "useSession",
    ()=>useSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$lib$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/lib/client.js [app-client] (ecmascript)");
/**
 *
 * NextAuth.js is the official integration of Auth.js for Next.js applications. It supports both
 * [Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components) and the
 * [Pages Router](https://nextjs.org/docs/pages). It includes methods for signing in, signing out, hooks, and a React
 * Context provider to wrap your application and make session data available anywhere.
 *
 * For use in [Server Actions](https://nextjs.org/docs/app/api-reference/functions/server-actions), check out [these methods](https://authjs.dev/guides/upgrade-to-v5#methods)
 *
 * @module react
 */ "use client";
;
;
;
const __NEXTAUTH = {
    baseUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$lib$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXTAUTH_URL ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.VERCEL_URL).origin,
    basePath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$lib$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXTAUTH_URL).path,
    baseUrlServer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$lib$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXTAUTH_URL_INTERNAL ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXTAUTH_URL ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.VERCEL_URL).origin,
    basePathServer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$lib$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXTAUTH_URL_INTERNAL ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXTAUTH_URL).path,
    _lastSync: 0,
    _session: undefined,
    _getSession: ()=>{}
};
// https://github.com/nextauthjs/next-auth/pull/10762
let broadcastChannel = null;
function getNewBroadcastChannel() {
    if (typeof BroadcastChannel === "undefined") {
        return {
            postMessage: ()=>{},
            addEventListener: ()=>{},
            removeEventListener: ()=>{},
            name: "next-auth",
            onmessage: null,
            onmessageerror: null,
            close: ()=>{},
            dispatchEvent: ()=>false
        };
    }
    return new BroadcastChannel("next-auth");
}
function broadcast() {
    if (broadcastChannel === null) {
        broadcastChannel = getNewBroadcastChannel();
    }
    return broadcastChannel;
}
// TODO:
const logger = {
    debug: console.debug,
    error: console.error,
    warn: console.warn
};
const SessionContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]?.(undefined);
function useSession(options) {
    if (!SessionContext) {
        throw new Error("React Context is unavailable in Server Components");
    }
    // @ts-expect-error Satisfy TS if branch on line below
    const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SessionContext);
    if (!value && ("TURBOPACK compile-time value", "development") !== "production") {
        throw new Error("[next-auth]: `useSession` must be wrapped in a <SessionProvider />");
    }
    const { required, onUnauthenticated } = options ?? {};
    const requiredAndNotLoading = required && value.status === "unauthenticated";
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useSession.useEffect": ()=>{
            if (requiredAndNotLoading) {
                const url = `${__NEXTAUTH.basePath}/signin?${new URLSearchParams({
                    error: "SessionRequired",
                    callbackUrl: window.location.href
                })}`;
                if (onUnauthenticated) onUnauthenticated();
                else window.location.href = url;
            }
        }
    }["useSession.useEffect"], [
        requiredAndNotLoading,
        onUnauthenticated
    ]);
    if (requiredAndNotLoading) {
        return {
            data: value.data,
            update: value.update,
            status: "loading"
        };
    }
    return value;
}
async function getSession(params) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$lib$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])("session", __NEXTAUTH, logger, params);
    if (params?.broadcast ?? true) {
        // https://github.com/nextauthjs/next-auth/pull/11470
        getNewBroadcastChannel().postMessage({
            event: "session",
            data: {
                trigger: "getSession"
            }
        });
    }
    return session;
}
async function getCsrfToken() {
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$lib$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])("csrf", __NEXTAUTH, logger);
    return response?.csrfToken ?? "";
}
async function getProviders() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$lib$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])("providers", __NEXTAUTH, logger);
}
async function signIn(provider, options, authorizationParams) {
    const { callbackUrl, ...rest } = options ?? {};
    const { redirect = true, redirectTo = callbackUrl ?? window.location.href, ...signInParams } = rest;
    const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$lib$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiBaseUrl"])(__NEXTAUTH);
    const providers = await getProviders();
    if (!providers) {
        const url = `${baseUrl}/error`;
        window.location.href = url;
        return; // TODO: Return error if `redirect: false`
    }
    if (!provider || !providers[provider]) {
        const url = `${baseUrl}/signin?${new URLSearchParams({
            callbackUrl: redirectTo
        })}`;
        window.location.href = url;
        return; // TODO: Return error if `redirect: false`
    }
    const providerType = providers[provider].type;
    if (providerType === "webauthn") {
        // TODO: Add docs link with explanation
        throw new TypeError([
            `Provider id "${provider}" refers to a WebAuthn provider.`,
            'Please use `import { signIn } from "next-auth/webauthn"` instead.'
        ].join("\n"));
    }
    const signInUrl = `${baseUrl}/${providerType === "credentials" ? "callback" : "signin"}/${provider}`;
    const csrfToken = await getCsrfToken();
    const res = await fetch(`${signInUrl}?${new URLSearchParams(authorizationParams)}`, {
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Auth-Return-Redirect": "1"
        },
        body: new URLSearchParams({
            ...signInParams,
            csrfToken,
            callbackUrl: redirectTo
        })
    });
    const data = await res.json();
    if (redirect) {
        const url = data.url ?? redirectTo;
        window.location.href = url;
        // If url contains a hash, the browser does not reload the page. We reload manually
        if (url.includes("#")) window.location.reload();
        return;
    }
    const error = new URL(data.url).searchParams.get("error") ?? undefined;
    const code = new URL(data.url).searchParams.get("code") ?? undefined;
    if (res.ok) {
        await __NEXTAUTH._getSession({
            event: "storage"
        });
    }
    return {
        error,
        code,
        status: res.status,
        ok: res.ok,
        url: error ? null : data.url
    };
}
async function signOut(options) {
    const { redirect = true, redirectTo = options?.callbackUrl ?? window.location.href } = options ?? {};
    const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$lib$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiBaseUrl"])(__NEXTAUTH);
    const csrfToken = await getCsrfToken();
    const res = await fetch(`${baseUrl}/signout`, {
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Auth-Return-Redirect": "1"
        },
        body: new URLSearchParams({
            csrfToken,
            callbackUrl: redirectTo
        })
    });
    const data = await res.json();
    broadcast().postMessage({
        event: "session",
        data: {
            trigger: "signout"
        }
    });
    if (redirect) {
        const url = data.url ?? redirectTo;
        window.location.href = url;
        // If url contains a hash, the browser does not reload the page. We reload manually
        if (url.includes("#")) window.location.reload();
        return;
    }
    await __NEXTAUTH._getSession({
        event: "storage"
    });
    return data;
}
function SessionProvider(props) {
    if (!SessionContext) {
        throw new Error("React Context is unavailable in Server Components");
    }
    const { children, basePath, refetchInterval, refetchWhenOffline } = props;
    if (basePath) __NEXTAUTH.basePath = basePath;
    /**
     * If session was `null`, there was an attempt to fetch it,
     * but it failed, but we still treat it as a valid initial value.
     */ const hasInitialSession = props.session !== undefined;
    /** If session was passed, initialize as already synced */ __NEXTAUTH._lastSync = hasInitialSession ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$lib$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["now"])() : 0;
    const [session, setSession] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "SessionProvider.useState": ()=>{
            if (hasInitialSession) __NEXTAUTH._session = props.session;
            return props.session;
        }
    }["SessionProvider.useState"]);
    /** If session was passed, initialize as not loading */ const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](!hasInitialSession);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SessionProvider.useEffect": ()=>{
            __NEXTAUTH._getSession = ({
                "SessionProvider.useEffect": async ({ event } = {})=>{
                    try {
                        const storageEvent = event === "storage";
                        // We should always update if we don't have a client session yet
                        // or if there are events from other tabs/windows
                        if (storageEvent || __NEXTAUTH._session === undefined) {
                            __NEXTAUTH._lastSync = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$lib$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["now"])();
                            __NEXTAUTH._session = await getSession({
                                broadcast: !storageEvent
                            });
                            setSession(__NEXTAUTH._session);
                            return;
                        }
                        if (// If there is no time defined for when a session should be considered
                        // stale, then it's okay to use the value we have until an event is
                        // triggered which updates it
                        !event || // If the client doesn't have a session then we don't need to call
                        // the server to check if it does (if they have signed in via another
                        // tab or window that will come through as a "stroage" event
                        // event anyway)
                        __NEXTAUTH._session === null || // Bail out early if the client session is not stale yet
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$lib$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["now"])() < __NEXTAUTH._lastSync) {
                            return;
                        }
                        // An event or session staleness occurred, update the client session.
                        __NEXTAUTH._lastSync = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$lib$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["now"])();
                        __NEXTAUTH._session = await getSession();
                        setSession(__NEXTAUTH._session);
                    } catch (error) {
                        logger.error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$lib$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientSessionError"](error.message, error));
                    } finally{
                        setLoading(false);
                    }
                }
            })["SessionProvider.useEffect"];
            __NEXTAUTH._getSession();
            return ({
                "SessionProvider.useEffect": ()=>{
                    __NEXTAUTH._lastSync = 0;
                    __NEXTAUTH._session = undefined;
                    __NEXTAUTH._getSession = ({
                        "SessionProvider.useEffect": ()=>{}
                    })["SessionProvider.useEffect"];
                }
            })["SessionProvider.useEffect"];
        }
    }["SessionProvider.useEffect"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SessionProvider.useEffect": ()=>{
            const handle = {
                "SessionProvider.useEffect.handle": ()=>__NEXTAUTH._getSession({
                        event: "storage"
                    })
            }["SessionProvider.useEffect.handle"];
            // Listen for storage events and update session if event fired from
            // another window (but suppress firing another event to avoid a loop)
            // Fetch new session data but tell it to not to fire another event to
            // avoid an infinite loop.
            // Note: We could pass session data through and do something like
            // `setData(message.data)` but that can cause problems depending
            // on how the session object is being used in the client; it is
            // more robust to have each window/tab fetch it's own copy of the
            // session object rather than share it across instances.
            broadcast().addEventListener("message", handle);
            return ({
                "SessionProvider.useEffect": ()=>broadcast().removeEventListener("message", handle)
            })["SessionProvider.useEffect"];
        }
    }["SessionProvider.useEffect"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SessionProvider.useEffect": ()=>{
            const { refetchOnWindowFocus = true } = props;
            // Listen for when the page is visible, if the user switches tabs
            // and makes our tab visible again, re-fetch the session, but only if
            // this feature is not disabled.
            const visibilityHandler = {
                "SessionProvider.useEffect.visibilityHandler": ()=>{
                    if (refetchOnWindowFocus && document.visibilityState === "visible") __NEXTAUTH._getSession({
                        event: "visibilitychange"
                    });
                }
            }["SessionProvider.useEffect.visibilityHandler"];
            document.addEventListener("visibilitychange", visibilityHandler, false);
            return ({
                "SessionProvider.useEffect": ()=>document.removeEventListener("visibilitychange", visibilityHandler, false)
            })["SessionProvider.useEffect"];
        }
    }["SessionProvider.useEffect"], [
        props.refetchOnWindowFocus
    ]);
    const isOnline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$lib$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnline"])();
    // TODO: Flip this behavior in next major version
    const shouldRefetch = refetchWhenOffline !== false || isOnline;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SessionProvider.useEffect": ()=>{
            if (refetchInterval && shouldRefetch) {
                const refetchIntervalTimer = setInterval({
                    "SessionProvider.useEffect.refetchIntervalTimer": ()=>{
                        if (__NEXTAUTH._session) {
                            __NEXTAUTH._getSession({
                                event: "poll"
                            });
                        }
                    }
                }["SessionProvider.useEffect.refetchIntervalTimer"], refetchInterval * 1000);
                return ({
                    "SessionProvider.useEffect": ()=>clearInterval(refetchIntervalTimer)
                })["SessionProvider.useEffect"];
            }
        }
    }["SessionProvider.useEffect"], [
        refetchInterval,
        shouldRefetch
    ]);
    const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SessionProvider.useMemo[value]": ()=>({
                data: session,
                status: loading ? "loading" : session ? "authenticated" : "unauthenticated",
                async update (data) {
                    if (loading) return;
                    setLoading(true);
                    const newSession = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$lib$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])("session", __NEXTAUTH, logger, typeof data === "undefined" ? undefined : {
                        body: {
                            csrfToken: await getCsrfToken(),
                            data
                        }
                    });
                    setLoading(false);
                    if (newSession) {
                        setSession(newSession);
                        broadcast().postMessage({
                            event: "session",
                            data: {
                                trigger: "getSession"
                            }
                        });
                    }
                    return newSession;
                }
            })
    }["SessionProvider.useMemo[value]"], [
        session,
        loading
    ]);
    return(// @ts-expect-error
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SessionContext.Provider, {
        value: value,
        children: children
    }));
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_abcee743._.js.map