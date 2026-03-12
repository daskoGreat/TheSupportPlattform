import type { Dictionary } from "./types";

export function getNestedValue(obj: Dictionary | undefined, path: string): unknown {
    if (!obj) return undefined;
    return path.split(".").reduce<any>((acc, key) => (acc ? acc[key] : undefined), obj);
}

export function interpolate(template: string, vars?: Record<string, string | number>) {
    if (!vars) return template;
    return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
        const v = vars[key];
        return v === undefined || v === null ? "" : String(v);
    });
}

