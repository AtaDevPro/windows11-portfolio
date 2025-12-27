import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Windows 11",
  description: "Personal portfolio website with Windows 11 UI theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
