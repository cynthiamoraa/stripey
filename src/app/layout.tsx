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

export const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
);

export const metadata: Metadata = {
  title: "Sque - AI-powered Conversations",
  description: "Sque.ai helps you supercharge customer communication with AI.",
  openGraph: {
    title: "Sque - AI-powered Conversations",
    description: "Modern customer engagement powered by AI.",
    url: "https://sque.ai",
    siteName: "Sque",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body theme--Light flavor--Chroma accent--Blurple min-h-screen">
        <main className="">{children}</main>
      </body>
    </html>
  );
}
