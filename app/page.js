import { Sree_Krushnadevaraya, Syne } from "next/font/google"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Stack from "../components/Stack"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Philosophy from "../components/Philosophy"
import Marquee from "../components/Marquee"
import ContactMe from "../components/ContactMe"
import Footer from "../components/Footer"

const syne = Syne({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${syne.className}`}>
      <Navbar />
      <Header />
      <Marquee />
      <Stack />
      <Experience />
      <Projects />
      <Philosophy />
      {/* <ContactMe /> */}
      <Footer />
    </main>
  )
}
