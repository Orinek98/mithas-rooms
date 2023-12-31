import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/style/globals.css'
import '@/style/calendar.css'
import '@/style/dataRangePicker.css'
import '@/style/image-slider.css'
import '@/style/room_card.css'
import '@/style/phone-number-style.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <html lang="en">
          <body className={inter.className}>
            {children}
          </body>
        </html>
  )
}
