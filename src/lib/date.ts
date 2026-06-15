const MS_PER_DAY = 1000 * 60 * 60 * 24;

export function calculateDaysLeft(endedAt: string | undefined): number {
  if (!endedAt) return 0;

  const end = new Date(endedAt);
  const now = new Date();
  const endDay = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const diff = Math.round((endDay.getTime() - today.getTime()) / MS_PER_DAY);
  return Math.max(0, diff);
}

export function formatReviewDate(iso: string) {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}. ${m}. ${day}`;
}
