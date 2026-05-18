"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center gap-4 bg-surface p-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-2xl font-semibold text-ink">
          문제가 발생했어요
        </h2>
        <p className="text-sm text-ink-muted">
          잠시 후 다시 시도해 주세요.
        </p>
        {process.env.NODE_ENV === "development" && (
          <pre className="mt-2 max-w-full overflow-auto whitespace-pre-wrap text-left text-xs text-ink-muted">
            {error.message}
          </pre>
        )}
      </div>
      <button
        onClick={reset}
        className="flex h-12 items-center justify-center rounded-[4px] bg-amber px-7"
      >
        <span className="text-lg font-semibold leading-[21px] text-on-amber">
          다시 시도
        </span>
      </button>
    </div>
  );
}
