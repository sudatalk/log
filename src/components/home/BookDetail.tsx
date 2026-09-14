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
  return (
    <div className="flex min-w-0 flex-1 flex-col items-start gap-2 self-stretch">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={coverImageUrl}
        alt={`${title} 커버`}
        className="aspect-[384/434] w-full object-cover"
      />

      <div className="flex w-full items-center justify-between gap-2">
        {content ? (
          <BookStats
            contentId={content.id}
            liked={content.liked}
            likeCount={content.likeCount}
            reviewCount={content.reviewCount}
            averageRating={content.averageRating}
            onClickHeart={onClickHeart}
          />
        ) : (
          <span />
        )}
        <BookPurchaseChip purchaseUrl={content?.purchaseUrl ?? purchaseUrl} />
      </div>

      <div className="flex flex-col items-start gap-1.5 self-stretch">
        <h2 className="self-stretch text-2xl font-semibold leading-[29px] tracking-[0.2px] text-ink">
          {title}
        </h2>
        <p className="self-stretch text-sm font-normal leading-[17px] tracking-[0.2px] text-ink-secondary">
          {author}
        </p>
      </div>

      <p className="min-w-0 self-stretch break-words text-xs font-light leading-[160%] text-ink-muted">
        {description}
      </p>
    </div>
  );
}
