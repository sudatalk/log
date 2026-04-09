export function Logo() {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className="font-noto text-[20px] font-semibold leading-none tracking-[0.18em] text-ink-muted">
        LOG
      </span>
      <div className="flex items-center gap-2">
        <div className="h-px w-3 bg-line" />
        <span className="text-[6px] font-normal tracking-[0.28em] text-ink-muted/50">
          Think · Write · Share
        </span>
        <div className="h-px w-3 bg-line" />
      </div>
    </div>
  );
}
