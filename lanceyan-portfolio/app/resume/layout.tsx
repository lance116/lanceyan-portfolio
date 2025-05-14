import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Lance Yan - Resume',
  description: 'Resume of Lance Yan',
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: 'black', overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
