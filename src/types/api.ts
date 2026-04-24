export enum CategoryType {
  BOOK = "BOOK",
  MOVIE = "MOVIE",
}

export type Schedule = {
  scheduleId: number;
  contentId: number;
  categoryType: CategoryType;
  title: string;
  description: string;
  author: string;
  coverImageUrl: string;
  startedAt: string;
  endedAt: string;
  memo: string;
};

export type ContentStats = {
  reviewCount: number;
  likeCount: number;
  averageRating: number | null;
};
