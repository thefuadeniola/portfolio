import { Sree_Krushnadevaraya, Syne } from "next/font/google"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Stack from "../components/Stack"

const syne = Syne({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${syne.className}`}>
      <Navbar />
      <Header />
      <Stack />
    </main>
  )
}
