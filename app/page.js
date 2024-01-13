import { Sree_Krushnadevaraya, Syne } from "next/font/google"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Stack from "../components/Stack"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Philosophy from "../components/Philosophy"
import Marquee from "../components/Marquee"
import ContactMe from "../components/Contact"
import Footer from "../components/Footer"



export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Marquee />
      <Stack />
      <Experience />
      <Projects />
      <ContactMe />
      <Philosophy />
      <Footer />
    </main>
  )
}
