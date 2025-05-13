
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lance's Portfolio",
  description: "Portfolio website of Lance Yan, Computer Science student at the University of Waterloo",
  icons: {
    icon: '/waterloo-logo.png',
    apple: '/waterloo-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Top Navigation Bar (moved from page.tsx) */}
        <nav className="row-start-1 w-full h-[56px] flex items-center justify-between px-6 sm:px-12 bg-white/80 dark:bg-black/80 shadow-md fixed top-0 left-0 z-50 backdrop-blur border-b border-gray-200 dark:border-gray-800">
          {/* Left: Name/Home Button */}
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:opacity-80 transition-opacity">Lance Yan</Link>
          {/* Right: Nav Links */}
          <div className="flex gap-6 items-center">
            <Link href="/" className="flex items-center justify-center w-9 h-9 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" aria-label="Home">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 10.5V21h15V10.5" />
              </svg>
            </Link>
            <Link href="/projects" className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link>
            <Link href="/experience" className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</Link>
            <Link href="/resume" className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Resume</Link>
          </div>        </nav>
        <div style={{ paddingTop: 56 }}>{children}</div>
          {/* Footer section - added to layout so it appears on all pages */}
        <footer className="w-full bg-black text-white text-center text-sm py-6 z-10">
          <div className="mb-3">
            Built with{" "}
            <span className="text-blue-400 font-medium mx-1">React</span>•
            <span className="text-green-400 font-medium mx-1">Next.js</span>•
            <span className="text-cyan-400 font-medium mx-1">TypeScript</span>•
            <span className="text-yellow-400 font-medium mx-1">JavaScript</span>•
            <span className="text-pink-400 font-medium mx-1">HTML</span>•
            <span className="text-purple-400 font-medium mx-1">CSS</span>•
            <span className="text-sky-400 font-medium mx-1">Tailwind CSS</span>
            and deployed with <span className="text-gray-400 font-medium">Vercel</span>
          </div>
          <div>
            Copyright © 2025 Lance Yan All rights reserved
          </div>
        </footer>
      </body>
    </html>
  );
}
