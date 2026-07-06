import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Wadi Al Dhaid Tours LLC | Premium Travel Experiences",
    template: "%s | Wadi Al Dhaid Tours LLC",
  },
  description:
    "Experience the world in ultimate luxury. Premium travel packages, visa services, and Umrah packages for Dubai, Pakistan, and worldwide destinations.",
  keywords: [
    "luxury travel",
    "dubai tours",
    "pakistan tours",
    "umrah packages",
    "visa services",
    "premium travel agency",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Wadi Al Dhaid Tours LLC",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className={`${inter.className} min-h-full flex flex-col antialiased`} style={{ fontFamily: "var(--font-body, 'Inter', sans-serif)" }}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
