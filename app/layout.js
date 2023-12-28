import './globals.css'

export const metadata = {
  title: 'Olaleye Fuad - Software Developer',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
