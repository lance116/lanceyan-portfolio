"use client";
import { useEffect, useState } from 'react';

export default function ResumePage() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if the user is on a mobile device (iOS/iPhone)
    const checkDevice = () => {
      const userAgent = navigator.userAgent;
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      backgroundColor: 'black',
      margin: 0,
      padding: 0,
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {isMobile && (
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '0',
          width: '100%',
          textAlign: 'center',
          zIndex: 10000,
          padding: '10px',
        }}>
          <a 
            href="/ResumeV2.pdf" 
            download="LanceYan_Resume.pdf"
            style={{
              backgroundColor: '#3B82F6',
              color: 'white',
              padding: '12px 20px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            Download Resume
          </a>
        </div>
      )}
      
      {/* On mobile: use iframe with fallback to direct link */}
      {isMobile ? (
        <iframe
          src="/ResumeV2.pdf"
          style={{ 
            width: '100%', 
            height: '100%', 
            border: 'none',
            margin: 0,
            padding: 0,
            marginTop: '50px' // Space for the download button
          }}
          title="Lance Yan's Resume"
        />
      ) : (
        /* On desktop: keep using object tag for better PDF experience */
        <object
          data="/ResumeV2.pdf"
          type="application/pdf"
          style={{ 
            width: '100%', 
            height: '100%', 
            border: 'none',
            margin: 0,
            padding: 0
          }}
        >
          <p style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
            Unable to display PDF. <a href="/ResumeV2.pdf" style={{ color: '#3B82F6' }}>Download instead</a>
          </p>
        </object>
      )}
    </div>
  );
}
