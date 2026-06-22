import { BookStats } from "@/components/home/BookStats";

export function BookDetail({
  coverImageUrl,
  title,
  author,
  description,
  liked,
  likeCount,
  reviewCount,
  averageRating,
  onClickHeart,
}: {
  coverImageUrl: string;
  title: string;
  author: string;
  description: string;
  liked: boolean;
  likeCount: number;
  reviewCount: number;
  averageRating: number | null;
  onClickHeart?: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-start gap-2 self-stretch">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={coverImageUrl}
        alt={`${title} 커버`}
        className="aspect-[384/434] w-full object-cover"
      />

      <BookStats
        liked={liked}
        likeCount={likeCount}
        reviewCount={reviewCount}
        averageRating={averageRating}
        onClickHeart={onClickHeart}
      />

      <div className="flex flex-col items-start gap-1.5 self-stretch">
        <h2 className="self-stretch text-2xl font-semibold leading-[29px] tracking-[0.2px] text-ink">
          {title}
        </h2>
        <p className="self-stretch text-sm font-normal leading-[17px] tracking-[0.2px] text-ink-secondary">
          {author}
        </p>
      </div>

      <p className="self-stretch text-xs font-light leading-[160%] text-ink-muted">
        {description}
      </p>
    </div>
  );
}
