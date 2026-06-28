import type {
  ContentDetail,
  ContentReviewsRequest,
  ContentReviewsResponse,
  ContentStats,
  LikeToggleResponse,
  ScheduledContent,
  Schedule,
  SchedulesRequest,
  SchedulesResponse,
  UserCheckResponse,
  UserSignUpRequest,
  UserSignUpResponse,
} from "@/types/api";

import axios from "axios";


// TODO: api host 환경변수로 분리
// 임시코드. 서버는 백엔드를 직접 호출, 브라우저는 next.config.ts의 rewrites로 같은 origin 프록시.
const API_BASE_URL = typeof window === "undefined" ? "http://localhost:8080" : "/api";


export async function getSchedules(params: SchedulesRequest): Promise<SchedulesResponse> {
  const query = new URLSearchParams({
    size: String(params.size),
    page: String(params.page),
  });
  const res = await axios.get(`${API_BASE_URL}/schedules?${query}`);
  
  if (!res.data) {
    throw new Error(`Failed to fetch /schedules: ${res.status} ${res.statusText}`);
  }
  
  return res.data;
}

export async function getCurrentSchedules(): Promise<ScheduledContent[]> {
  const res = await axios.get(`${API_BASE_URL}/schedules/current`);

  if (!res.data) {
    throw new Error(`Failed to fetch /schedules/current: ${res.status} ${res.statusText}`);
  }

  return res.data;
}

export async function getContentStats(contentId: number): Promise<ContentStats> {
  const res = await axios.get(`${API_BASE_URL}/contents/${contentId}/stats`);
  
  if (!res.data) {
    throw new Error(`Failed to fetch /contents/${contentId}/stats: ${res.status} ${res.statusText}`);
  }

  return res.data;
}

export async function getCheckUser({ appUserId }: { appUserId: number }): Promise<UserCheckResponse> {
  const res = await axios.get(`${API_BASE_URL}/users/check`, {
    headers: {
      appUserId: String(appUserId),
    },
  });
  
  if (!res.data) {
    throw new Error(`Failed to fetch /users/check: ${res.status} ${res.statusText}`);
  }
  
  return res.data;
}

export async function getContentDetail(contentId: number, userId: number): Promise<ContentDetail> {
  const res = await axios.get(`${API_BASE_URL}/contents/${contentId}`, {
    headers: {
      "X-User-Id": String(userId),
    },
  });
  
  if (!res.data) {
    throw new Error(`Failed to fetch /contents/${contentId}: ${res.status} ${res.statusText}`);
  }
  
  return res.data;
}

export async function getContentReviews(
  contentId: number,
  params: ContentReviewsRequest,
  userId?: number,
): Promise<ContentReviewsResponse> {
  const query = new URLSearchParams({
    page: String(params.page),
    size: String(params.size),
  });
  const headers: HeadersInit = {};
  if (userId !== undefined) {
    headers["X-User-Id"] = String(userId);
  }

  const res = await axios.get(`${API_BASE_URL}/contents/${contentId}/reviews?${query}`, {
    headers,
  });
  
  if (!res.data) {
    throw new Error(`Failed to fetch /contents/${contentId}/reviews: ${res.status} ${res.statusText}`);
  }
  
  return res.data;
}

export async function toggleContentLike(
  contentId: number,
  userId: number,
): Promise<LikeToggleResponse> {
  const res = await axios.post(`${API_BASE_URL}/contents/${contentId}/like`, {
    headers: {
      "X-User-Id": String(userId),
    },
  });
  
  if (!res.data) {
    throw new Error(
      `Failed to toggle /contents/${contentId}/like: ${res.status} ${res.statusText}`,
    );
  }
  
  return res.data;
}

export async function toggleReviewLike(
  reviewId: number,
  userId: number,
): Promise<LikeToggleResponse> {
  const res = await axios.post(`${API_BASE_URL}/reviews/${reviewId}/like`, {
    headers: {
      "X-User-Id": String(userId),
    },
  });
  
  if (!res.data) {
    throw new Error(
      `Failed to toggle /reviews/${reviewId}/like: ${res.status} ${res.statusText}`,
    );
  }
  
  return res.data;
}

export async function postSignUpUser(data: UserSignUpRequest): Promise<UserSignUpResponse> {
  const res = await axios.post(`${API_BASE_URL}/users/sign-up`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  if (!res.data) {
    throw new Error(`Failed to fetch /users/sign-up: ${res.status} ${res.statusText}`);
  }
  
  return res.data;
}
