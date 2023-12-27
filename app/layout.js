import { Syne } from 'next/font/google'
import './globals.css'

const syne = Syne({ subsets: ['latin'] })

export const metadata = {
  title: 'Olaleye Fuad - Software Developer',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={syne.className}>{children}</body>
    </html>
  )
}
