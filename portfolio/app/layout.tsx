import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ana-Maria Rădulescu — Frontend Engineer',
  description: 'Frontend Engineer building games, motion and interfaces with React, TypeScript and Next.js.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=IBM+Plex+Mono:wght@400;500&family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,200..800&family=Space+Mono:wght@400;700&family=Silkscreen&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
