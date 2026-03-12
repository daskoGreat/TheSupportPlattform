(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/coach/profile/profile.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "profile-module__oNc1kW__actions",
  "avatarFields": "profile-module__oNc1kW__avatarFields",
  "avatarOverlay": "profile-module__oNc1kW__avatarOverlay",
  "avatarOverlayText": "profile-module__oNc1kW__avatarOverlayText",
  "avatarPreview": "profile-module__oNc1kW__avatarPreview",
  "avatarRow": "profile-module__oNc1kW__avatarRow",
  "bgCorner": "profile-module__oNc1kW__bgCorner",
  "card": "profile-module__oNc1kW__card",
  "error": "profile-module__oNc1kW__error",
  "form": "profile-module__oNc1kW__form",
  "grid": "profile-module__oNc1kW__grid",
  "header": "profile-module__oNc1kW__header",
  "helperText": "profile-module__oNc1kW__helperText",
  "input": "profile-module__oNc1kW__input",
  "label": "profile-module__oNc1kW__label",
  "notice": "profile-module__oNc1kW__notice",
  "noticeBody": "profile-module__oNc1kW__noticeBody",
  "noticeTitle": "profile-module__oNc1kW__noticeTitle",
  "primaryButton": "profile-module__oNc1kW__primaryButton",
  "subtitle": "profile-module__oNc1kW__subtitle",
  "success": "profile-module__oNc1kW__success",
  "textarea": "profile-module__oNc1kW__textarea",
  "wrapper": "profile-module__oNc1kW__wrapper",
});
}),
"[project]/src/app/coach/profile/CoachProfileForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoachProfileForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/coach/profile/profile.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ToastContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CoachProfileForm(props) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(props.initialName);
    const [image, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(props.initialImage);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(props.initialTitle);
    const [shortDescription, setShortDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(props.initialShortDescription);
    const [longBio, setLongBio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(props.initialLongBio);
    const [specialties, setSpecialties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(props.initialSpecialties.join(", "));
    const [languages, setLanguages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(props.initialLanguages.join(", "));
    const [yearsOfExperience, setYearsOfExperience] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(props.initialYearsOfExperience > 0 ? String(props.initialYearsOfExperience) : "");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const initials = name.split(" ").filter(Boolean).slice(0, 2).map((part)=>part[0]?.toUpperCase()).join("") || "C";
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(null);
        setSuccess(null);
        if (!image.trim()) {
            setError("Lägg till en profilbild");
            return;
        }
        if (!name.trim()) {
            setError("Fyll i ditt namn");
            return;
        }
        if (!shortDescription.trim()) {
            setError("Skriv en kort beskrivning");
            return;
        }
        setIsSaving(true);
        try {
            const res = await fetch("/api/coach/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    image,
                    shortDescription,
                    title,
                    longBio,
                    specialties,
                    yearsOfExperience,
                    languages
                })
            });
            const data = await res.json();
            if (!res.ok) {
                const message = data.error || "Kunde inte spara profilen";
                setError(message);
                showToast(message, "error");
                return;
            }
            setSuccess("Profilen sparades");
            showToast("Profilen sparades", "success");
            setTimeout(()=>{
                router.push("/coach/dashboard");
            }, 700);
        } catch (err) {
            const message = "Kunde inte spara profilen";
            setError(message);
            showToast(message, "error");
        } finally{
            setIsSaving(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarPreview,
                        "aria-busy": isSaving,
                        children: [
                            image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: image,
                                alt: name || "Coach"
                            }, void 0, false, {
                                fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                                lineNumber: 122,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: initials
                            }, void 0, false, {
                                fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                                lineNumber: 124,
                                columnNumber: 25
                            }, this),
                            isSaving && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarOverlay,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "spinner",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                                        lineNumber: 128,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarOverlayText,
                                        children: "Sparar..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                                        lineNumber: 129,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                                lineNumber: 127,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                        lineNumber: 120,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarFields,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                children: [
                                    "Profilbild",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "url",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                        placeholder: "Länk till profilbild (https://...)",
                                        value: image,
                                        onChange: (e)=>setImage(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                                        lineNumber: 136,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                                lineNumber: 134,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].helperText,
                                children: "Klistra in en säker bildlänk för din profil. Du ser en förhandsvisning ovan."
                            }, void 0, false, {
                                fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                                lineNumber: 144,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                        lineNumber: 133,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                lineNumber: 119,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        children: [
                            "Namn",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                value: name,
                                onChange: (e)=>setName(e.target.value),
                                placeholder: "Ditt fullständiga namn"
                            }, void 0, false, {
                                fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                                lineNumber: 153,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                        lineNumber: 151,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        children: [
                            "Titel",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                value: title,
                                onChange: (e)=>setTitle(e.target.value),
                                placeholder: "Till exempel: Samtalscoach, Stresscoach..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                                lineNumber: 164,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                        lineNumber: 162,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                lineNumber: 150,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                children: [
                    "Kort beskrivning",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea,
                        value: shortDescription,
                        onChange: (e)=>setShortDescription(e.target.value),
                        placeholder: "Beskriv kort vem du är och hur du stöttar dina klienter.",
                        rows: 3
                    }, void 0, false, {
                        fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                        lineNumber: 176,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                lineNumber: 174,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                children: [
                    "Längre presentation (valfritt)",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea,
                        value: longBio,
                        onChange: (e)=>setLongBio(e.target.value),
                        placeholder: "Här kan du berätta lite mer om din bakgrund, ditt arbetssätt och vad som är viktigt i dina samtal.",
                        rows: 5
                    }, void 0, false, {
                        fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                        lineNumber: 187,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                lineNumber: 185,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        children: [
                            "Specialiseringar (valfritt)",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                value: specialties,
                                onChange: (e)=>setSpecialties(e.target.value),
                                placeholder: "Till exempel: stress, utmattning, relationer (kommaseparerat)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                                lineNumber: 199,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                        lineNumber: 197,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        children: [
                            "Språk (valfritt)",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                value: languages,
                                onChange: (e)=>setLanguages(e.target.value),
                                placeholder: "Till exempel: Svenska, Engelska"
                            }, void 0, false, {
                                fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                                lineNumber: 210,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                        lineNumber: 208,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                lineNumber: 196,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                children: [
                    "År av erfarenhet (valfritt)",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        min: 0,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                        value: yearsOfExperience,
                        onChange: (e)=>setYearsOfExperience(e.target.value),
                        placeholder: "Till exempel: 5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                        lineNumber: 222,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                lineNumber: 220,
                columnNumber: 13
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                lineNumber: 232,
                columnNumber: 23
            }, this),
            success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].success,
                children: success
            }, void 0, false, {
                fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                lineNumber: 233,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$coach$2f$profile$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                    disabled: isSaving,
                    "aria-busy": isSaving,
                    "aria-live": "polite",
                    children: [
                        isSaving && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "spinner",
                            style: {
                                marginRight: 8
                            },
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                            lineNumber: 243,
                            columnNumber: 34
                        }, this),
                        isSaving ? "Sparar..." : props.isComplete ? "Uppdatera profil" : "Spara profil"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                    lineNumber: 236,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
                lineNumber: 235,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/coach/profile/CoachProfileForm.tsx",
        lineNumber: 118,
        columnNumber: 9
    }, this);
}
_s(CoachProfileForm, "RO5TJIY9UVv80qG/lN9Be549ND8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = CoachProfileForm;
var _c;
__turbopack_context__.k.register(_c, "CoachProfileForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_0c69d201._.js.map