(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/coach/dashboard/dashboard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "dashboard-module__cGxJhW__active",
  "backButton": "dashboard-module__cGxJhW__backButton",
  "badge": "dashboard-module__cGxJhW__badge",
  "badgeConfirmed": "dashboard-module__cGxJhW__badgeConfirmed",
  "badgeDeclined": "dashboard-module__cGxJhW__badgeDeclined",
  "badgePending": "dashboard-module__cGxJhW__badgePending",
  "bookingActions": "dashboard-module__cGxJhW__bookingActions",
  "bookingCard": "dashboard-module__cGxJhW__bookingCard",
  "bookingHeader": "dashboard-module__cGxJhW__bookingHeader",
  "bookingTime": "dashboard-module__cGxJhW__bookingTime",
  "bookingType": "dashboard-module__cGxJhW__bookingType",
  "bookingUser": "dashboard-module__cGxJhW__bookingUser",
  "btnPrimary": "dashboard-module__cGxJhW__btnPrimary",
  "btnSecondary": "dashboard-module__cGxJhW__btnSecondary",
  "chatInput": "dashboard-module__cGxJhW__chatInput",
  "chatInputArea": "dashboard-module__cGxJhW__chatInputArea",
  "chatMessages": "dashboard-module__cGxJhW__chatMessages",
  "chatThread": "dashboard-module__cGxJhW__chatThread",
  "conversationItem": "dashboard-module__cGxJhW__conversationItem",
  "convoHeader": "dashboard-module__cGxJhW__convoHeader",
  "convoName": "dashboard-module__cGxJhW__convoName",
  "convoPreview": "dashboard-module__cGxJhW__convoPreview",
  "convoTime": "dashboard-module__cGxJhW__convoTime",
  "dashboardContainer": "dashboard-module__cGxJhW__dashboardContainer",
  "emptyState": "dashboard-module__cGxJhW__emptyState",
  "highlightCard": "dashboard-module__cGxJhW__highlightCard",
  "mainGrid": "dashboard-module__cGxJhW__mainGrid",
  "messageBubble": "dashboard-module__cGxJhW__messageBubble",
  "messageReceived": "dashboard-module__cGxJhW__messageReceived",
  "messageSent": "dashboard-module__cGxJhW__messageSent",
  "messageTime": "dashboard-module__cGxJhW__messageTime",
  "panel": "dashboard-module__cGxJhW__panel",
  "panelContent": "dashboard-module__cGxJhW__panelContent",
  "panelHeader": "dashboard-module__cGxJhW__panelHeader",
  "pending": "dashboard-module__cGxJhW__pending",
  "sectionTitle": "dashboard-module__cGxJhW__sectionTitle",
  "sendButton": "dashboard-module__cGxJhW__sendButton",
  "summaryCard": "dashboard-module__cGxJhW__summaryCard",
  "summaryLabel": "dashboard-module__cGxJhW__summaryLabel",
  "summaryRow": "dashboard-module__cGxJhW__summaryRow",
  "summaryValue": "dashboard-module__cGxJhW__summaryValue",
  "unread": "dashboard-module__cGxJhW__unread",
  "unreadText": "dashboard-module__cGxJhW__unreadText",
});
}),
"[project]/src/app/coach/dashboard/DashboardClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/coach/dashboard/dashboard.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function DashboardClient({ initialConversations, initialBookings, summaryStats, currentUserId }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [conversations, setConversations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialConversations);
    const [bookings, setBookings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialBookings);
    // UI State
    const [selectedConvoId, setSelectedConvoId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [replyText, setReplyText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const formatTime = (isoString)=>{
        const d = new Date(isoString);
        return d.toLocaleTimeString('sv-SE', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    const formatDate = (isoString)=>{
        const d = new Date(isoString);
        return d.toLocaleDateString('sv-SE', {
            month: 'short',
            day: 'numeric'
        });
    };
    const handleSendMessage = async (e)=>{
        e.preventDefault();
        if (!replyText.trim() || !selectedConvoId) return;
        setIsSending(true);
        try {
            const res = await fetch('/api/coach/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    conversationId: selectedConvoId,
                    content: replyText
                })
            });
            if (res.ok) {
                const newMessage = await res.json();
                // Update local state instantly
                setConversations((prev)=>prev.map((c)=>{
                        if (c.id === selectedConvoId) {
                            return {
                                ...c,
                                lastMessage: newMessage.content,
                                lastMessageAt: newMessage.createdAt,
                                unreadCount: 0,
                                messages: [
                                    ...c.messages,
                                    newMessage
                                ]
                            };
                        }
                        return c;
                    }));
                setReplyText("");
            }
        } catch (err) {
            console.error(err);
        } finally{
            setIsSending(false);
        }
    };
    const handleUpdateBooking = async (bookingId, newStatus)=>{
        // Optimistic update
        setBookings((prev)=>prev.map((b)=>b.id === bookingId ? {
                    ...b,
                    status: newStatus
                } : b));
        try {
            await fetch(`/api/coach/bookings/${bookingId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: newStatus
                })
            });
        // router.refresh(); // Optional: if we want to sync other stats
        } catch (error) {
            console.error("Failed to update booking status", error);
        }
    };
    const selectedConvo = conversations.find((c)=>c.id === selectedConvoId);
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrowStart = new Date(todayStart);
    tomorrowStart.setDate(tomorrowStart.getDate() + 1);
    const pendingBookings = bookings.filter((b)=>b.status === "PENDING");
    const todayBookings = bookings.filter((b)=>{
        const d = new Date(b.startTime);
        return d >= todayStart && d < tomorrowStart && b.status === "CONFIRMED";
    });
    const upcomingBookings = bookings.filter((b)=>{
        const d = new Date(b.startTime);
        return d >= tomorrowStart && b.status === "CONFIRMED";
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryCard} ${summaryStats.unreadMessages > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightCard : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryValue,
                                children: summaryStats.unreadMessages
                            }, void 0, false, {
                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                lineNumber: 151,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLabel,
                                children: "Nya meddelanden"
                            }, void 0, false, {
                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                lineNumber: 152,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                        lineNumber: 150,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryValue,
                                children: summaryStats.todayBookings
                            }, void 0, false, {
                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                lineNumber: 155,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLabel,
                                children: "Dagens bokningar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                lineNumber: 156,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                        lineNumber: 154,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryCard} ${summaryStats.pendingRequests > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightCard : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryValue,
                                children: summaryStats.pendingRequests
                            }, void 0, false, {
                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                lineNumber: 159,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLabel,
                                children: "Väntande förfrågningar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                lineNumber: 160,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                        lineNumber: 158,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryValue,
                                children: summaryStats.upcomingBookings
                            }, void 0, false, {
                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                lineNumber: 163,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLabel,
                                children: "Kommande samtal"
                            }, void 0, false, {
                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                lineNumber: 164,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                        lineNumber: 162,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                lineNumber: 149,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainGrid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Meddelanden"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                        lineNumber: 174,
                                        columnNumber: 25
                                    }, this),
                                    selectedConvoId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backButton,
                                        onClick: ()=>setSelectedConvoId(null),
                                        children: "← Tillbaka till listan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                        lineNumber: 176,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                lineNumber: 173,
                                columnNumber: 21
                            }, this),
                            !selectedConvoId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelContent,
                                children: conversations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "40",
                                            height: "40",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                lineNumber: 187,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                            lineNumber: 186,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Inga nya meddelanden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                            lineNumber: 189,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                    lineNumber: 185,
                                    columnNumber: 33
                                }, this) : conversations.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].conversationItem} ${c.unreadCount > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].unread : ''}`,
                                        onClick: ()=>{
                                            setSelectedConvoId(c.id);
                                            // Mark as read locally if entering convo
                                            if (c.unreadCount > 0) {
                                                setConversations((prev)=>prev.map((p)=>p.id === c.id ? {
                                                            ...p,
                                                            unreadCount: 0
                                                        } : p));
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].convoHeader,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].convoName,
                                                        children: c.userName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].convoTime,
                                                        children: formatTime(c.lastMessageAt)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                lineNumber: 204,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].convoPreview} ${c.unreadCount > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].unreadText : ''}`,
                                                children: c.lastMessage || "Inga meddelanden ännu"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                lineNumber: 208,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, c.id, true, {
                                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                        lineNumber: 193,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                lineNumber: 183,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatThread,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatMessages,
                                        children: selectedConvo?.messages.map((m)=>{
                                            const isCoach = m.senderId === currentUserId;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageBubble} ${isCoach ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageSent : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageReceived}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: m.content
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageTime,
                                                        children: formatTime(m.createdAt)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, m.id, true, {
                                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                lineNumber: 221,
                                                columnNumber: 41
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                        lineNumber: 217,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatInputArea,
                                        onSubmit: handleSendMessage,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatInput,
                                                placeholder: "Skriv ett meddelande...",
                                                value: replyText,
                                                onChange: (e)=>setReplyText(e.target.value),
                                                disabled: isSending
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                lineNumber: 232,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sendButton,
                                                disabled: !replyText.trim() || isSending,
                                                children: "Svara"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                lineNumber: 240,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                        lineNumber: 231,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                lineNumber: 216,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                        lineNumber: 172,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelHeader,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Bokningar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                    lineNumber: 251,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                lineNumber: 250,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelContent,
                                children: [
                                    pendingBookings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                                children: "Väntande förfrågningar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                lineNumber: 258,
                                                columnNumber: 33
                                            }, this),
                                            pendingBookings.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookingCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pending}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookingHeader,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookingUser,
                                                                    children: b.userName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgePending}`,
                                                                    children: "Väntar"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                                    lineNumber: 263,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookingType,
                                                            children: b.sessionType
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookingTime,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "📅 ",
                                                                        formatDate(b.startTime)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "🕒 ",
                                                                        formatTime(b.startTime),
                                                                        " - ",
                                                                        formatTime(b.endTime)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookingActions,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnPrimary,
                                                                    onClick: ()=>handleUpdateBooking(b.id, "CONFIRMED"),
                                                                    children: "Acceptera"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnSecondary,
                                                                    onClick: ()=>handleUpdateBooking(b.id, "DECLINED"),
                                                                    children: "Avböj"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, b.id, true, {
                                                    fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 37
                                                }, this))
                                        ]
                                    }, void 0, true),
                                    todayBookings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                                children: "Dagens samtal"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                lineNumber: 284,
                                                columnNumber: 33
                                            }, this),
                                            todayBookings.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookingCard,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookingHeader,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookingUser,
                                                                    children: b.userName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                                    lineNumber: 288,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeConfirmed}`,
                                                                    children: "Bekräftad"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                                    lineNumber: 289,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                            lineNumber: 287,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookingType,
                                                            children: b.sessionType
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookingTime,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "🕒 Idag kl ",
                                                                    formatTime(b.startTime),
                                                                    " - ",
                                                                    formatTime(b.endTime)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, b.id, true, {
                                                    fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 37
                                                }, this))
                                        ]
                                    }, void 0, true),
                                    upcomingBookings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                                children: "Kommande"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                lineNumber: 303,
                                                columnNumber: 33
                                            }, this),
                                            upcomingBookings.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookingCard,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookingHeader,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookingUser,
                                                                    children: b.userName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                                    lineNumber: 307,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeConfirmed}`,
                                                                    children: "Bekräftad"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                                    lineNumber: 308,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookingType,
                                                            children: b.sessionType
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookingTime,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "📅 ",
                                                                        formatDate(b.startTime)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                                    lineNumber: 312,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "🕒 ",
                                                                        formatTime(b.startTime),
                                                                        " - ",
                                                                        formatTime(b.endTime)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                                    lineNumber: 313,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, b.id, true, {
                                                    fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 37
                                                }, this))
                                        ]
                                    }, void 0, true),
                                    bookings.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "40",
                                                height: "40",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "3",
                                                        y: "4",
                                                        width: "18",
                                                        height: "18",
                                                        rx: "2",
                                                        ry: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "16",
                                                        y1: "2",
                                                        x2: "16",
                                                        y2: "6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "8",
                                                        y1: "2",
                                                        x2: "8",
                                                        y2: "6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "3",
                                                        y1: "10",
                                                        x2: "21",
                                                        y2: "10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                lineNumber: 322,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Inga väntande eller kommande bokningar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                                lineNumber: 328,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                        lineNumber: 321,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                                lineNumber: 253,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                        lineNumber: 249,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
                lineNumber: 169,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/coach/dashboard/DashboardClient.tsx",
        lineNumber: 147,
        columnNumber: 9
    }, this);
}
_s(DashboardClient, "ORucRmr8T/117+o3Zyrts/SS6m8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DashboardClient;
var _c;
__turbopack_context__.k.register(_c, "DashboardClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_3a405501._.js.map