import { Syne } from "next/font/google"
import Navbar from "../components/Navbar"
import Header from "../components/Header"

const syne = Syne({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${syne.className}`}>
      <Navbar />
      <Header />
    </main>
  )
}
