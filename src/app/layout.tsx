import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = {
  title: "IMD Care — Intelligent Medical & Health Guidance",
  description:
    "Your Health. Better Understood. Simplify health questions, analyze lab reports, evaluate symptoms, and discover preventive health guidance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#102A43] antialiased selection:bg-[#0F766E]/20 selection:text-[#0F766E]">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
