  import type { Metadata } from "next";
  import "./globals.css";

  ;

  export const metadata: Metadata = {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    ),
    title: "Sque | AI-powered Conversations",
    description:
      "Sque.ai helps you supercharge customer communication with AI.",
   

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
        <head>
          {/* 👇 Explicitly tell browsers to use your favicon */}
          <link
            rel="icon"
            href="/Sque_icon_universal.svg"
            type="image/svg+xml"
          />
        </head>
        <body className="body theme--Light flavor--Chroma accent--Blurple min-h-screen">
          <main className="">{children}</main>
        </body>
      </html>
    );
  }
