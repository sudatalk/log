"use client";

import { OVERFLOW_HIDDEN, TEXT_ELLIPSIS, TEXT_SM } from "@/constants/tailwind";
import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";

type Props = {
  description: string;
  /** true면 길 때 말줄임 + 더보기/접기 */
  expandable?: boolean;
  /** expandable일 때 접힌 상태 줄 수. 기본 3 */
  collapsedLines?: number;
};

const BookDescription = ({
  description,
  expandable = false,
  collapsedLines = 3,
}: Props) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useLayoutEffect(() => {
    if (!expandable) return;
    if (expanded) return;

    const el = textRef.current;
    if (!el) return;

    setIsOverflowing(el.scrollHeight > el.clientHeight + 1);
  }, [description, expandable, expanded, collapsedLines]);

  if (!expandable) {
    return (
      <p
        className={clsx(
          OVERFLOW_HIDDEN,
          TEXT_SM,
          TEXT_ELLIPSIS,
          "[display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]",
        )}
      >
        {description}
      </p>
    );
  }

  return (
    <div className="flex min-w-0 flex-col">
      <p
        ref={textRef}
        className={clsx(
          TEXT_SM,
          "whitespace-pre-wrap break-words",
          !expanded &&
            clsx(
              OVERFLOW_HIDDEN,
              TEXT_ELLIPSIS,
              "[display:-webkit-box] [-webkit-box-orient:vertical]",
            ),
        )}
        style={
          !expanded
            ? ({ WebkitLineClamp: collapsedLines } as CSSProperties)
            : undefined
        }
      >
        {description}
      </p>
      {isOverflowing && (
        <button
          type="button"
          aria-label={expanded ? "접기" : "더보기"}
          className="mt-0.5 cursor-pointer self-end text-[#737373]"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setExpanded((prev) => !prev);
          }}
        >
          {expanded ? (
            <ChevronUp size={16} strokeWidth={2} />
          ) : (
            <ChevronDown size={16} strokeWidth={2} />
          )}
        </button>
      )}
    </div>
  );
};

export default BookDescription;
