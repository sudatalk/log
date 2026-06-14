import type { ContentStats, Schedule, SchedulesRequest, SchedulesResponse, UserCheckResponse } from "@/types/api";

// TODO: api host 환경변수로 분리
// 임시코드. 서버는 백엔드를 직접 호출, 브라우저는 next.config.ts의 rewrites로 같은 origin 프록시.
const API_BASE_URL = typeof window === "undefined" ? "http://localhost:8080" : "/api";

export async function getSchedules(params: SchedulesRequest): Promise<SchedulesResponse> {
  const query = new URLSearchParams({
    size: String(params.size),
    page: String(params.page),
  });
  const res = await fetch(`${API_BASE_URL}/schedules?${query}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch /schedules: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function getCurrentSchedules(): Promise<Schedule[]> {
  const res = await fetch(`${API_BASE_URL}/schedules/current`);
  if (!res.ok) {
    throw new Error(`Failed to fetch /schedules/current: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function getContentStats(contentId: number): Promise<ContentStats> {
  const res = await fetch(`${API_BASE_URL}/contents/${contentId}/stats`);
  if (!res.ok) {
    throw new Error(`Failed to fetch /contents/${contentId}/stats: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function getCheckUser({ appUserId }: { appUserId: number }): Promise<UserCheckResponse> {
  const res = await fetch(`${API_BASE_URL}/users/check`, {
    headers: {
      appUserId: String(appUserId),
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch /users/check: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
