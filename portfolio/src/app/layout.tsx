import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'
import CursorCustom from '@/components/animations/CursorCustom'
import PageWrapper from '@/components/layout/PageWrapper'
import '@/styles/main.scss'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Ana-Maria Rădulescu',
  description: 'Frontend Developer, PM, Entrepreneur & Artist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <CursorCustom />
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  )
}