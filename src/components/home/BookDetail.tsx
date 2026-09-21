import { BookStats } from "@/components/home/BookStats";
import { BookPurchaseChip } from "@/components/shared/BookPurchaseChip";
import { ContentDetail } from "@/types/api";

export function BookDetail({
  coverImageUrl,
  title,
  author,
  description,
  content,
  purchaseUrl,
  onClickHeart,
}: {
  coverImageUrl: string;
  title: string;
  author: string;
  description: string;
  content?: ContentDetail;
  purchaseUrl?: string | null;
  onClickHeart?: () => void;
}) {
  // const fname = new URL(coverImageUrl).searchParams.get("fname");

  // const decodedUrl = fname ? decodeURIComponent(fname) : coverImageUrl;

  return (
    <div className="flex min-w-0 flex-1 flex-col items-start gap-3 self-stretch">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={coverImageUrl}
        alt={`${title} 커버`}
        className="mx-auto aspect-[3/4] w-[min(100%,300px)] object-cover"
      />

      {content && (
        <BookStats
          contentId={content.id}
          liked={content.liked}
          likeCount={content.likeCount}
          reviewCount={content.reviewCount}
          averageRating={content.averageRating}
          onClickHeart={onClickHeart}
          trailing={
            <BookPurchaseChip
              purchaseUrl={content.purchaseUrl ?? purchaseUrl}
              variant="icon"
              className="size-[18px] text-ink-muted"
            />
          }
        />
      )}

      <div className="flex flex-col items-start gap-2 self-stretch">
        <h2 className="self-stretch text-[28px] font-semibold leading-[34px] tracking-[0.2px] text-ink">{title}</h2>
        <p className="self-stretch text-base font-normal leading-5 tracking-[0.2px] text-ink-secondary">{author}</p>
      </div>

      <p className="min-w-0 self-stretch break-words text-sm font-normal leading-[160%] text-ink-muted">
        {description}
      </p>
    </div>
  );
}
