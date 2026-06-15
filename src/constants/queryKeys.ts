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
  },
} as const;
