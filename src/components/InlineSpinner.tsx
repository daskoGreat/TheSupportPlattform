"use client";

export default function InlineSpinner({ size = 16 }: { size?: number }) {
    return (
        <span
            className="spinner"
            aria-hidden="true"
            style={{
                width: size,
                height: size,
            }}
        />
    );
}

