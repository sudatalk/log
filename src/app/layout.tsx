import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Serif_KR } from "next/font/google";
import { QueryProvider } from "@/components/QueryProvider";
import "./globals.css";
import KakaoSDKChecker from "@/components/KakaoSDKChecker";

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
    <html lang="kr" className={`${pretendard.variable} ${notoSerifKR.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col w-full h-full">
        <KakaoSDKChecker>
          <QueryProvider>{children}</QueryProvider>
        </KakaoSDKChecker>
      </body>
    </html>
  );
}
