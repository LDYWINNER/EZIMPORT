import Providers from "@/providers/providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EzImport",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}