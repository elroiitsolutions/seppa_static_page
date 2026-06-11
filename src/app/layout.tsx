import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "../layouts/MainLayout";

export const metadata: Metadata = {
  title: "Yarnex - Textile Manufacturing",
  description: "Crafting quality textiles for global industries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
