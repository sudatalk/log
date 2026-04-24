import { BookStats } from "@/components/home/BookStats";

export function BookDetail({
  coverImageUrl,
  title,
  author,
  description,
  likeCount,
  reviewCount,
  averageRating,
}: {
  coverImageUrl: string;
  title: string;
  author: string;
  description: string;
  likeCount: number;
  reviewCount: number;
  averageRating: number | null;
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
        likeCount={likeCount}
        reviewCount={reviewCount}
        averageRating={averageRating}
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
