import { BookStats } from "@/components/home/BookStats";

export function BookDetail({
  imageUrl,
  title,
  author,
  description,
  likes,
  comments,
  rating,
}: {
  imageUrl: string;
  title: string;
  author: string;
  description: string;
  likes: number;
  comments: number;
  rating: number;
}) {
  return (
    <div className="flex flex-1 flex-col items-start gap-2 self-stretch">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt={`${title} 커버`}
        className="aspect-[384/434] w-full object-cover"
      />

      <BookStats likes={likes} comments={comments} rating={rating} />

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
