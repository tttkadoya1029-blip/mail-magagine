import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CFA Level 1 無料7日間メール講座【勝利の方程式】| Financial Analyst Academy",
  description:
    "CFAに興味があるが何から始めればいいか分からないあなたへ。CFA Charterholderが教える最短合格戦略を7日間で無料公開。日本語要点集・受験情報電子書籍プレゼント中。",
  keywords:
    "CFA, CFA Level 1, CFA試験, CFA勉強法, CFA対策, Financial Analyst, メール講座, 無料講座, CFA日本語",
  openGraph: {
    title: "CFA Level 1 無料7日間メール講座【勝利の方程式】",
    description:
      "CFA Charterholderが教える最短合格戦略を7日間で無料公開。日本語要点集付き。",
    type: "website",
    locale: "ja_JP",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
