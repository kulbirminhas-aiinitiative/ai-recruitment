import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LogProvider } from "./components/LogContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Recruitment Portal",
  description: "AI-powered recruitment and job search platform. Find jobs, analyze your CV, and connect with top employers using intelligent technology.",
  openGraph: {
    title: "AI Recruitment Portal",
    description: "AI-powered recruitment and job search platform.",
    type: "website",
    url: "https://aiinitiative.co.uk/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Recruitment Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Recruitment Portal - Intelligent Job Search and Recruitment",
    description: "AI-powered recruitment and job search platform.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LogProvider>
          {children}
        </LogProvider>
      </body>
    </html>
  );
}
