import Nav from "@/components/Nav"
import localFont from 'next/font/local'

const gilroy = localFont({
  src: [
    {
      path: '../assets/fonts/Gilroy-Light.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gilroy-LightItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Gilroy-Regular.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gilroy-Medium.ttf',
      weight: '700',
      style: 'medium',
    },
    {
      path: '../assets/fonts/Gilroy-Heavy.ttf',
      weight: '800',
      style: 'bold',
    },

  ],
})

export default function Home() {
  return (
    <main>
      <Nav />
    </main>
  )
}
