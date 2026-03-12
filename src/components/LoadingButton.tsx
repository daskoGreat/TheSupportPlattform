"use client";

import InlineSpinner from "./InlineSpinner";

export default function LoadingButton({
    isLoading,
    children,
    loadingLabel,
    className,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading: boolean;
    loadingLabel?: string;
}) {
    return (
        <button
            {...props}
            className={className}
            disabled={props.disabled || isLoading}
            aria-busy={isLoading}
            style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                whiteSpace: "nowrap",
                ...(props.style || {}),
            }}
        >
            {isLoading && <InlineSpinner />}
            <span style={{ display: "inline-block", minWidth: "1ch" }}>
                {isLoading && loadingLabel ? loadingLabel : children}
            </span>
        </button>
    );
}

