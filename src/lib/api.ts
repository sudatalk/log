import type {
  ContentDetail,
  ContentReviewsRequest,
  ContentReviewsResponse,
  ContentStats,
  LikeToggleResponse,
  ReviewComment,
  ReviewCommentCreateRequest,
  ReviewCommentsRequest,
  ReviewCommentsResponse,
  ScheduledContent,
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

export async function getContentDetail(contentId: number): Promise<ContentDetail> {
  const res = await axios.get(`${API_BASE_URL}/contents/${contentId}`);

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

export async function toggleContentLike(contentId: number): Promise<LikeToggleResponse> {
  const res = await axios.post(`${API_BASE_URL}/contents/${contentId}/like`);

  if (!res.data) {
    throw new Error(`Failed to toggle /contents/${contentId}/like: ${res.status} ${res.statusText}`);
  }

  return res.data;
}

export async function toggleReviewLike(reviewId: number): Promise<LikeToggleResponse> {
  const res = await axios.post(`${API_BASE_URL}/reviews/${reviewId}/like`);

  if (!res.data) {
    throw new Error(`Failed to toggle /reviews/${reviewId}/like: ${res.status} ${res.statusText}`);
  }

  return res.data;
}

export async function deleteReview(reviewId: number, userId: number): Promise<void> {
  const res = await fetch(`${API_BASE_URL}/reviews/${reviewId}`, {
    method: "DELETE",
    headers: {
      "X-User-Id": String(userId),
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to delete /reviews/${reviewId}: ${res.status} ${res.statusText}`);
  }
}

export async function getReviewComments(
  reviewId: number,
  params: ReviewCommentsRequest,
): Promise<ReviewCommentsResponse> {
  const query = new URLSearchParams({
    page: String(params.page),
    size: String(params.size),
  });
  const res = await fetch(`${API_BASE_URL}/reviews/${reviewId}/comments?${query}`);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch /reviews/${reviewId}/comments: ${res.status} ${res.statusText}`,
    );
  }
  return res.json();
}

export async function createReviewComment(
  reviewId: number,
  userId: number,
  data: ReviewCommentCreateRequest,
): Promise<ReviewComment> {
  const res = await fetch(`${API_BASE_URL}/reviews/${reviewId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-User-Id": String(userId),
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(
      `Failed to create /reviews/${reviewId}/comments: ${res.status} ${res.statusText}`,
    );
  }
  return res.json();
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
