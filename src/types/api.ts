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
  reviewCount: number;
  averageRating: number;
};

export type ContentStats = {
  reviewCount: number;
  likeCount: number;
  averageRating: number | null;
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
