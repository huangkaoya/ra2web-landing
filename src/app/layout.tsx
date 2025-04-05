import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "红色井界-全平台即时战略爽游",
  description: "非官方的红色警戒2重制版，用前端技术完全重构，支持浏览器直接打开随时随地畅玩，和全球玩家实时对战，或者爆锤电脑AI",
  keywords: "红色警戒下载, 如何玩红警, webra2, 苹果如何玩红警, 平板上如何玩红警, 手机上如何玩红警, 红警, 红警2, 红色警戒2, 网页红警",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
