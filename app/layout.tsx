import { Footer } from "@/components/footer";
import { InsforgeProvider } from "@/components/insforge-provider";
import { QueryProvider } from "@/components/query-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getAuthFromCookies } from "@insforge/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Insighta – Simple & Powerful Web Analytics",
  description:
    "Track your website traffic in real time with Insighta. Get insights on visitors, locations, devices, and performance without the complexity of traditional analytics tools.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = await getAuthFromCookies();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <InsforgeProvider initialState={initialState}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <TooltipProvider>
                {children}
                <Footer />
                <Toaster />
              </TooltipProvider>
            </ThemeProvider>
          </InsforgeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
