export const queryKeys = {
  schedules: {
    all: ["schedules"] as const,
    current: ["schedules", "current"] as const,
  },
  contents: {
    stats: (contentId: number | undefined) =>
      ["contents", contentId, "stats"] as const,
    detail: (contentId: number | undefined, userId: number | undefined) =>
      ["contents", contentId, "detail", userId] as const,
    reviews: (contentId: number | undefined, userId: number | undefined) =>
      ["contents", contentId, "reviews", userId] as const,
  },
  reviews: {
    comments: (reviewId: number | undefined) => ["reviews", reviewId, "comments"] as const,
  },
} as const;
