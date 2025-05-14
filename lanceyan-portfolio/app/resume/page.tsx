"use client";

export default function ResumePage() {
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
      zIndex: 9999
    }}>
      <object
        data="/LanceResume.pdf"
        type="application/pdf"
        style={{ 
          width: '100%', 
          height: '100%', 
          border: 'none',
          margin: 0,
          padding: 0
        }}
      />
    </div>
  );
}
