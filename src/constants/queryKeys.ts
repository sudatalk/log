export const queryKeys = {
  schedules: {
    all: ["schedules"] as const,
    current: ["schedules", "current"] as const,
  },
  contents: {
    stats: (contentId: number | undefined) =>
      ["contents", contentId, "stats"] as const,
  },
} as const;
