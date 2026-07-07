"use client";

import { CENTER, FLEX, FLEX_COL } from "@/constants/tailwind";
import { useCreateReviewComment } from "@/hooks/useCreateReviewComment";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useReviewComments } from "@/hooks/useReviewComments";
import { formatReviewDate } from "@/lib/date";
import type { ReviewComment } from "@/types/api";
import clsx from "clsx";
import { ArrowUp } from "lucide-react";
import { FormEvent, useLayoutEffect, useRef, useState } from "react";
import { Sheet } from "react-modal-sheet";

const SHEET_HEIGHT = 375;

type CommentAvatarProps = {
  nickname: string;
  profileImageUrl: string;
};

const getInitials = (nickname: string) => nickname.slice(0, 2);

const CommentAvatar = ({ nickname, profileImageUrl }: CommentAvatarProps) => {
  const [hasError, setHasError] = useState(false);
  const showImage = profileImageUrl && !hasError;

  return (
    <div
      className={clsx(
        "size-6 shrink-0 overflow-hidden rounded-full bg-[#333333]",
        CENTER,
      )}
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt={`${nickname} 프로필`}
          className="size-full object-cover"
          src={profileImageUrl}
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="text-[10px] font-semibold leading-3 text-[#FEFEFF]">
          {getInitials(nickname)}
        </span>
      )}
    </div>
  );
};

type CommentItemProps = {
  comment: ReviewComment;
};

const CommentItem = ({ comment }: CommentItemProps) => {
  const date = formatReviewDate(comment.createdAt);
  const dateTime = comment.createdAt.slice(0, 10);

  return (
    <div className={clsx(FLEX, "w-full items-start gap-[5px]")}>
      <div className={clsx("flex w-[30px] shrink-0 justify-center")}>
        <CommentAvatar nickname={comment.nickname} profileImageUrl={comment.profileImageUrl} />
      </div>
      <div className={clsx(FLEX, FLEX_COL, "min-w-0 flex-1 gap-[5px]")}>
        <div className={clsx(FLEX, "h-[14px] items-center gap-[5px]")}>
          <span className="text-xs font-normal leading-[14px] text-black">{comment.nickname}</span>
          <time
            className="text-[8px] font-normal leading-[10px] tracking-[0.2px] text-[rgba(60,60,67,0.6)]"
            dateTime={dateTime}
          >
            {date}
          </time>
        </div>
        <p className="whitespace-pre-wrap text-[13px] font-normal leading-4 text-black">
          {comment.content}
        </p>
      </div>
    </div>
  );
};

type Props = {
  reviewId: number;
  contentId: number;
  userId: number;
  isOpen: boolean;
  onClose: () => void;
};

const ReviewCommentSheet = ({ reviewId, contentId, userId, isOpen, onClose }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const shouldScrollToTopRef = useRef(false);
  const {
    comments,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
  } = useReviewComments(reviewId, isOpen);
  const { mutate: createComment, isPending: isSubmitting } = useCreateReviewComment(
    reviewId,
    userId,
    contentId,
  );

  const sentinelRef = useInfiniteScroll({
    onIntersect: () => {
      fetchNextPage();
    },
    enabled: hasNextPage && !isFetchingNextPage,
  });

  useLayoutEffect(() => {
    if (!shouldScrollToTopRef.current) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollTop = 0;
    shouldScrollToTopRef.current = false;
  }, [comments]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed || isSubmitting) return;

    createComment(trimmed, {
      onSuccess: () => {
        setInputValue("");
        shouldScrollToTopRef.current = true;
      },
    });
  };

  return (
    <Sheet isOpen={isOpen} onClose={onClose} detent="content">
      <Sheet.Container
        unstyled
        className={clsx(
          "flex flex-col rounded-t-[24px] border border-b-0 border-[#E6E6E6] bg-white",
          "shadow-[0px_-3px_10px_rgba(38,38,38,0.2)]",
        )}
        style={{ height: SHEET_HEIGHT }}
      >
        <Sheet.Header unstyled className="shrink-0 px-2 pt-2">
          <div className={clsx("flex w-full flex-col items-center py-1")}>
            <div className="h-1 w-16 rounded-[2px] bg-[#A2A3A3]" />
          </div>
        </Sheet.Header>

        <Sheet.Content disableDrag unstyled className="min-h-0 flex-1 overflow-hidden">
          <div className={clsx(FLEX, FLEX_COL, "gap-4 px-2 pb-5")}>
            <div
              ref={scrollContainerRef}
              className={clsx(
                FLEX,
                FLEX_COL,
                "h-[250px] w-full gap-5 overflow-y-auto px-2.5",
              )}
            >
              {isPending && (
                <p className="text-center text-sm font-normal leading-[21px] text-[#737373]">
                  댓글을 불러오는 중...
                </p>
              )}
              {!isPending && comments.length === 0 && (
                <p className="text-center text-sm font-normal leading-[21px] text-[#737373]">
                  아직 댓글이 없습니다.
                </p>
              )}
              {comments.map((comment) => (
                <CommentItem key={comment.commentId} comment={comment} />
              ))}
              {hasNextPage && <div ref={sentinelRef} aria-hidden />}
            </div>

            <div className={clsx(FLEX, FLEX_COL, "w-full gap-4")}>
              <div className="h-px w-full shrink-0 bg-[#DDDCDB]" />
              <form
                className={clsx(
                  FLEX,
                  "box-border h-9 w-full shrink-0 items-center gap-2 rounded-full border border-[#D3D3D3] px-4",
                )}
                onSubmit={handleSubmit}
              >
                <input
                  className="min-w-0 flex-1 bg-transparent text-sm font-normal leading-[21px] text-black outline-none placeholder:text-[#737373]"
                  placeholder="댓글을 입력하세요"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                  type="submit"
                  className="flex size-3.5 shrink-0 items-center justify-center disabled:opacity-40"
                  disabled={!inputValue.trim() || isSubmitting}
                  aria-label="댓글 작성"
                >
                  <ArrowUp size={14} strokeWidth={2} className="text-[#414040]" />
                </button>
              </form>
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop className="!bg-black/40" onClick={onClose} />
    </Sheet>
  );
};

export default ReviewCommentSheet;
