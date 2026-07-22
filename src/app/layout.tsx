import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "../layouts/MainLayout";

export const metadata: Metadata = {
  title: "seppa solutions.com",
  description: "Seppa Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}


