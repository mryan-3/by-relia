import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-editorial",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "By.Relia — Form, Silence, and Movement",
  description:
    "A curated selection of timeless luxury essentials, crafted with premium fabrics and architectural precision.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f8f8f8] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#f8f8f8]">
        {children}
      </body>
    </html>
  );
}

