import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import localFont from 'next/font/local'

const sourceSans = localFont({
  src: [
    {
      path: '../assets/fonts/SourceSansPro-Light.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SourceSansPro-Bold.otf',
      weight: '700',
      style: 'normal',
    },

  ],
})

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
    </main>
  )
}
