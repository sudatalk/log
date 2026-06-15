import type {
  ContentDetail,
  ContentStats,
  Schedule,
  SchedulesRequest,
  SchedulesResponse,
} from "@/types/api";

// TODO: api host 환경변수로 분리
// 임시코드. 서버는 백엔드를 직접 호출, 브라우저는 next.config.ts의 rewrites로 같은 origin 프록시.
const API_BASE_URL =
  typeof window === "undefined" ? "http://localhost:8080" : "/api";

export async function getSchedules(params: SchedulesRequest): Promise<SchedulesResponse> {
  const query = new URLSearchParams({
    size: String(params.size),
    page: String(params.page),
  });
  const res = await fetch(`${API_BASE_URL}/schedules?${query}`);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch /schedules: ${res.status} ${res.statusText}`,
    );
  }
  return res.json();
}

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

export async function getContentDetail(
  contentId: number,
  userId: number,
): Promise<ContentDetail> {
  const res = await fetch(`${API_BASE_URL}/contents/${contentId}`, {
    headers: {
      "X-User-Id": String(userId),
    },
  });
  if (!res.ok) {
    throw new Error(
      `Failed to fetch /contents/${contentId}: ${res.status} ${res.statusText}`,
    );
  }
  return res.json();
}
