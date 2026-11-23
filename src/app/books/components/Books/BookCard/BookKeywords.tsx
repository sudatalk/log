import clsx from "clsx";
import type { Tag } from "@/types/api";

type Props = {
  tags: Tag[];
  className?: string;
};

const formatTagName = (name: string) => {
  const trimmed = name.trim();
  if (!trimmed) return null;
  return trimmed.startsWith("#") ? trimmed : `#${trimmed}`;
};

/** 필터 없는 표시용 태그. #필독서 칩 */
const BookKeywords = ({ tags, className }: Props) => {
  const labels = tags
    .map((tag) => {
      const label = formatTagName(tag.name);
      return label ? { id: tag.id, label } : null;
    })
    .filter((value): value is { id: number; label: string } => !!value);

  if (labels.length === 0) return null;

  return (
    <ul
      className={clsx("flex min-w-0 flex-row flex-wrap items-center gap-[3px]", className)}
      aria-label="태그"
    >
      {labels.map(({ id, label }) => (
        <li
          key={id}
          className="inline-flex h-[18px] items-center justify-center rounded-[24px] bg-[#F7F1E6] px-2 py-0.5 text-[10px] font-normal leading-[160%] text-black"
        >
          {label}
        </li>
      ))}
    </ul>
  );
};

export default BookKeywords;
