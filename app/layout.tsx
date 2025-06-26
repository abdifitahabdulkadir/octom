import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Octom",
  description:
    "Octom is a task management professional tool for companies, it has both dark and light themes",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>{children}</body>
    </html>
  );
}
