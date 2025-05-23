"use client";
import { useEffect, useState } from 'react';

export default function ResumePage() {
  const [isIOS, setIsIOS] = useState(false);
  
  useEffect(() => {
    // Check if the user is on an iOS device (iPhone, iPad, iPod)
    const userAgent = navigator.userAgent;
    setIsIOS(/iPhone|iPad|iPod/i.test(userAgent));
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
      {isIOS ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        }}>
          <a
            href="/ResumeV2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#3B82F6',
              color: 'white',
              padding: '16px 28px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              marginTop: '20px',
            }}
          >
            View Resume
          </a>
          <p style={{ color: 'white', marginTop: '18px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            (Opens in a new tab using your device&apos;s PDF viewer)
          </p>
        </div>
      ) : (
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
