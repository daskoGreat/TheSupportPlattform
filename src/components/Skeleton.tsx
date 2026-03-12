"use client";

export function SkeletonBlock({
    height = 16,
    width = "100%",
    radius = 12,
    style,
}: {
    height?: number;
    width?: number | string;
    radius?: number;
    style?: React.CSSProperties;
}) {
    return (
        <div
            className="skeleton"
            aria-hidden="true"
            style={{
                height,
                width,
                borderRadius: radius,
                ...style,
            }}
        />
    );
}

export function SkeletonCard({ height = 96 }: { height?: number }) {
    return <div className="skeleton" aria-hidden="true" style={{ height, borderRadius: 16 }} />;
}

export function SkeletonList({ rows = 5, rowHeight = 56 }: { rows?: number; rowHeight?: number }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {Array.from({ length: rows }).map((_, idx) => (
                <div
                    key={idx}
                    className="skeleton"
                    aria-hidden="true"
                    style={{ height: rowHeight, borderRadius: 16 }}
                />
            ))}
        </div>
    );
}

