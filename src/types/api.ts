export enum CategoryType {
  BOOK = "BOOK",
  MOVIE = "MOVIE",
}

export type Schedule = {
  scheduleId: number;
  contentId: number;
  title: string;
  author: string;
  description: string;
  coverImageUrl: string;
  startedAt: string;
  endedAt: string;
  likeCount: number;
  commentCount: number;
  averageRating: number;
};

export type ScheduledContent = {
  scheduleId: number;
  contentId: number;
  categoryType: CategoryType;
  title: string;
  description: string;
  author: string;
  coverImageUrl: string;
  startedAt: string;
  endedAt: string;
  memo?: string;
};

export type ContentStats = {
  reviewCount: number;
  likeCount: number;
  averageRating: number | null;
};

export type ContentDetail = {
  id: number;
  categoryType: CategoryType;
  title: string;
  description: string;
  coverImageUrl: string;
  author: string;
  publisher: string | null;
  isbn: string | null;
  director: string | null;
  runtimeMinutes: number | null;
  liked: boolean;
  reviewCount: number;
  likeCount: number;
  averageRating: number | null;
};

export type LikeToggleResponse = {
  liked: boolean;
  likeCount: number;
};

export type ContentReviewsRequest = {
  page: number;
  size: number;
};

export type ReviewQuoteItem = {
  id: number;
  quote: string;
  sequence: number;
};

export type ReviewQuestionItem = {
  id: number;
  question: string;
  sequence: number;
  answer: string;
};

export type ReviewListItem = {
  reviewId: number;
  userId: number;
  nickname: string;
  profileImageUrl: string;
  comment: string;
  shortComment: string;
  rating: number;
  isLiked: boolean;
  likeCount: number;
  commentCount: number;
  quotes: ReviewQuoteItem[];
  questions: ReviewQuestionItem[];
  createdAt: string;
};

export type ContentReviewsResponse = {
  content: ReviewListItem[];
  totalElements: number;
  totalPages: number;
  pageable: {
    unpaged: boolean;
    paged: boolean;
    pageSize: number;
    pageNumber: number;
    offset: number;
    sort: Sort;
  };
  first: boolean;
  last: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  sort: Sort;
  empty: boolean;
};

export type ReviewComment = {
  commentId: number;
  reviewId: number;
  userId: number;
  nickname: string;
  profileImageUrl: string;
  content: string;
  createdAt: string;
};

export type ReviewCommentsRequest = {
  page: number;
  size: number;
};

export type ReviewCommentsResponse = {
  content: ReviewComment[];
  totalElements: number;
  totalPages: number;
  pageable: {
    unpaged: boolean;
    paged: boolean;
    pageSize: number;
    pageNumber: number;
    offset: number;
    sort: Sort;
  };
  first: boolean;
  last: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  sort: Sort;
  empty: boolean;
};

export type ReviewCommentCreateRequest = {
  content: string;
};

export type SchedulesRequest = {
  size: number;
  page: number;
};

export type Sort = {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
};

export type SchedulesResponse = {
  content: Schedule[];
  totalElements: number;
  totalPages: number;
  pageable: {
    unpaged: boolean;
    paged: boolean;
    pageSize: number;
    pageNumber: number;
    offset: number;
    sort: Sort;
  };
  number: number;
  sort: Sort;
  empty: boolean;
};

export enum UserStatus {
  JOIN = "JOIN",
  WITHDRAW = "WITHDRAW",
}

export type UserCheckResponse = {
  registered: boolean;
  userId: number;
  status: UserStatus;
};

export type UserSignUpRequest = {
  appUserId: number;
  nickname?: string;
  email?: string;
  profileImageUrl?: string;
  agreedTermsIds?: number[];
};

export type UserSignUpResponse = {
  id: number;
  appUserId: number;
  nickname?: string;
};

export type UserMeResponse = {
  id?: number;
  appUserId?: number;
  nickname?: string;
  email?: string;
  profileImageUrl?: string;
  status?: UserStatus;
};

export type Term = {
  id?: number;
  type?: TermType;
  version?: number;
  content?: string;
  required?: boolean;
  sequence?: number;
};

export enum TermType {
  AGE = "AGE",
  PRIVACY = "PRIVACY",
  SERVICE = "SERVICE",
}
