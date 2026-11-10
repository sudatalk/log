import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/site";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: {
    absolute: `${SITE_NAME} — 읽고 쓰고 공유하는 독서 플랫폼`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} — 이달의 책과 함께하는 독서`,
    description: SITE_DESCRIPTION,
    url: "/",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
