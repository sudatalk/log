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
} as const;
