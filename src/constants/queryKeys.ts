export const queryKeys = {
  schedules: {
    all: ["schedules"] as const,
    current: ["schedules", "current"] as const,
  },
  contents: {
    stats: (contentId: number | undefined) => ["contents", contentId, "stats"] as const,
    detail: (contentId: number | undefined) => ["contents", contentId, "detail"] as const,
    reviews: (contentId: number | undefined) => ["contents", contentId, "reviews"] as const,
  },
  reviews: {
    comments: (reviewId: number | undefined) => ["reviews", reviewId, "comments"] as const,
    drafts: ["reviews", "drafts"] as const,
    my: ["reviews", "my"] as const,
  },
} as const;
