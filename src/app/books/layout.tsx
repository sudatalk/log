import type { Metadata } from "next";
import { SITE_NAME } from "@/constants/site";

export const metadata: Metadata = {
  title: "책 목록",
  description: `${SITE_NAME}에서 함께 읽는 책 목록을 확인하고 리뷰에 참여하세요.`,
  alternates: {
    canonical: "/books",
  },
  openGraph: {
    title: `책 목록 | ${SITE_NAME}`,
    description: `${SITE_NAME}에서 함께 읽는 책 목록을 확인하고 리뷰에 참여하세요.`,
    url: "/books",
  },
};

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
