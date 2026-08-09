import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Serif_KR } from "next/font/google";
import { QueryProvider } from "@/components/QueryProvider";
import "./globals.css";
import KakaoSDKChecker from "@/components/KakaoSDKChecker";
import { Toaster } from "@/components/ui/sonner";
import clsx from "clsx";
import { BG_BASE, FLEX, FLEX_COL, FULL } from "@/constants/tailwind";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
});

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LOG",
  description: "읽고 쓰고 공유하는 독서 플랫폼",
  icons: {
    icon: "favicon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="kr"
      className={`${pretendard.variable} ${notoSerifKR.variable} h-full antialiased`}
    >
      <body className={clsx("min-h-full", FULL)}>
        <div
          className={clsx(
            "mx-auto min-h-screen max-w-none lg:max-w-[430px]",
            FULL,
            FLEX,
            FLEX_COL,
            BG_BASE,
          )}
        >
          <KakaoSDKChecker>
            <QueryProvider>
              {children} <Toaster />
            </QueryProvider>
          </KakaoSDKChecker>
        </div>
      </body>
    </html>
  );
}
