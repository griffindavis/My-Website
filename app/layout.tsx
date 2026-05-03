import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Griffin Davis | Software Engineer",
  description:
    "Software engineer and technical lead building healthcare software at scale, with interests in iOS, product design, and workflow tooling."
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
