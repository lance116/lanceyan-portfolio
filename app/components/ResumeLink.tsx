"use client";
import { useEffect, useState, MouseEvent } from 'react';

export default function ResumeLink() {
  const [isIOS, setIsIOS] = useState(false);
  
  useEffect(() => {
    // Check if the user is on an iOS device (iPhone, iPad, iPod)
    const userAgent = navigator.userAgent;
    const isiOSDevice = /iPhone|iPad|iPod/i.test(userAgent);
    setIsIOS(isiOSDevice);
  }, []);

  const handleResumeClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!isIOS) {
      // For non-iOS devices, prevent default link behavior and open in new tab
      e.preventDefault();
      window.open('/ResumeV2.pdf', '_blank');
    }
    // For iOS devices, let the default link behavior work (opens in new tab)
  };

  return (
    <a 
      href="/ResumeV2.pdf" 
      target="_blank" 
      rel="noopener noreferrer" 
      onClick={handleResumeClick}
      className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      Resume
    </a>
  );
}
