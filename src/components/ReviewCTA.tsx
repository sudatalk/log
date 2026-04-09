export function ReviewCTA({ daysLeft }: { daysLeft: number }) {
  return (
    <div className="flex flex-col items-center gap-1 self-stretch">
      <p className="text-[11px] font-normal leading-[13px] text-ink-muted">
        리뷰 마감까지 <span className="font-semibold text-ink">{daysLeft}일</span> 남았습니다
      </p>
      <button className="flex h-12 w-full items-center justify-center rounded-[4px] bg-amber px-7">
        <span className="text-lg font-semibold leading-[21px] text-on-amber">
          리뷰 참여하기
        </span>
      </button>
    </div>
  );
}
