import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import { Syne } from "next/font/google"

const syne = Syne({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${syne.className}`}>
      <Nav />
      <Hero />
    </main>
  )
}
