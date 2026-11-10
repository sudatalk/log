export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://write-log.vercel.app";

export const SITE_NAME = "LOG";

export const SITE_DESCRIPTION =
  "읽고 쓰고 공유하는 독서 플랫폼. 이달의 책과 함께 한줄평·추천 질문·인상 문장으로 리뷰를 남기고 나누세요.";

export const SITE_KEYWORDS = [
  "LOG",
  "로그",
  "독서",
  "책 리뷰",
  "독서 모임",
  "한줄평",
  "북클럽",
  "이달의 책",
  "독서 플랫폼",
];

/** 서버(Node)에서 백엔드 직접 호출용. 브라우저는 /api rewrite 사용. */
export const SERVER_API_URL =
  process.env.API_URL ?? "http://localhost:8080";
