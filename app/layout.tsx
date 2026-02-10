import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SBS Corp | Building trust and delivering sustained outcomes",
  description: "SBS Corp helps businesses transform, grow and succeed with innovative technology solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
