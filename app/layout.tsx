  import type { Metadata } from "next";
  import "./globals.css";

  ;

  export const metadata: Metadata = {
    metadataBase: new URL(
      "https://stripey-six.vercel.app"|| "http://localhost:3000"
    ),
    title: "Sque | AI-powered Conversations",
    description:
      "Sque.ai helps you supercharge customer communication with AI.",
    icons: {
      icon: "https://stripey-six.vercel.app/Sque_icon_universal.svg", // 👈 Path to your icon inside /public
    },
    openGraph: {
      title: "Sque | AI-powered Conversations",
      description: "Modern customer engagement powered by AI.",
      url: "https://stripey-six.vercel.app/",
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
