import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "cat gallery",
  description: "Залипательная галерия с милыми котиками",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main className={"main"}>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
