import type { ContentStats, Schedule } from "@/types/api";

// TODO: api host 환경변수로 분리
const API_BASE_URL = "http://localhost:8080";

export async function getCurrentSchedules(): Promise<Schedule[]> {
  const res = await fetch(`${API_BASE_URL}/schedules/current`);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch /schedules/current: ${res.status} ${res.statusText}`,
    );
  }
  return res.json();
}

export async function getContentStats(
  contentId: number,
): Promise<ContentStats> {
  const res = await fetch(`${API_BASE_URL}/contents/${contentId}/stats`);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch /contents/${contentId}/stats: ${res.status} ${res.statusText}`,
    );
  }
  return res.json();
}
