import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Griffin Davis | Software Engineer",
  description:
    "Software engineer and technical lead building healthcare software at scale, with interests in iOS, product design, and workflow tooling.",
  icons: {
    icon: "/favicon.ico?v=3",
    shortcut: "/favicon.ico?v=3"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
