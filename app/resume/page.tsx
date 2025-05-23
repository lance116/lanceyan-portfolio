"use client";
import { useEffect } from 'react';

export default function ResumePage() {
  useEffect(() => {
    // Automatically open PDF in new tab
    window.open('/ResumeV2.pdf', '_blank');
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
    </div>
  );
}
