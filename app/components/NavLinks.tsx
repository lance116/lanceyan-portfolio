"use client";
import Link from "next/link";
import ResumeLink from "./ResumeLink";

export default function NavLinks() {
  return (
    <div className="flex gap-6 items-center">
      <Link href="/" className="flex items-center justify-center w-9 h-9 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" aria-label="Home">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 10.5V21h15V10.5" />
        </svg>
      </Link>
      <Link href="/projects" className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link>
      <Link href="/experience" className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</Link>
      <ResumeLink />
    </div>
  );
}
