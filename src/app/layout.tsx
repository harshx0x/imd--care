import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = {
  title: "IMD Care — Intelligent Medical & Health Guidance",
  description:
    "Better Health Understanding Starts Here. Understand symptoms, simplify medical reports, and make informed healthcare decisions with AI-powered guidance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#243447] antialiased selection:bg-[#0F766E]/20 selection:text-[#0F766E]">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
