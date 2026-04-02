import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Yulia`s Porfolio",
  description:
    "Hi, I'm Yulia, a passionate web developer with 10+ years of experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
