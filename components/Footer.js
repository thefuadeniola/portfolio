import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { logo } from '../assets/assets'
import { Syne, Manrope } from 'next/font/google'
import { AiFillGithub, AiOutlineInstagram, AiOutlineTwitter, AiOutlineGitlab } from 'react-icons/ai'


const syne = Syne({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })


const Footer = () => {
    return (
        <footer
            className={`${manrope.className} bg-black md:p-24 p-16 pt-6 flex flex-col space-y-12 md:space-y-0 md:flex-row md:mt-16 justify-around`}>
            <div className="">
                <div className="nav-logo flex flex-row items-center text-white">
                    <h1 className={`${syne.className} text-4xl mx-2 font-bold text-center`}>theFuad</h1>
                    <Image src={logo} height={60} width={60} />
                </div>
                <p className="mt-4 text-white">
                    &copy; Olaleye Fuad. 2023.
                </p>
                <div className="flex flex-row space-x-6 mt-4">
                    <a href="github.com/theylovefuad"><AiFillGithub className='text-gray-400 text-2xl hover:text-slate-800' /></a>
                    <a href="instagram.com/theylovefuad"><AiOutlineInstagram className='text-gray-400 text-2xl hover:text-slate-800' /></a>
                    <a href=""><AiOutlineTwitter className='text-gray-400 text-2xl hover:text-slate-800' /></a>
                    <a href=""><AiOutlineGitlab className='text-gray-400 text-2xl hover:text-slate-800' /></a>

                </div>
            </div>
            <div className="flex flex-col space-y-8 md:flex-row md:space-x-16 md:space-y-0">
                <div className="flex flex-col space-y-3">
                    <h2 className='text-white font-semibold '>QUICK ACCESS</h2>
                    <Link href="#philosophy" className="text-white text-sm">About Me</Link>
                    <Link href="#experience" className="text-white text-sm">Work Experience</Link>
                    <Link href="#projects" className="text-white text-sm">Projects I've Worked On</Link>
                    <Link href="https://github.com/thefuadeniola" className="text-white text-sm">Go to GitHub</Link>
                </div>
                <div className="flex flex-col space-y-3">
                    <h2 className='text-white font-semibold'>GET IN TOUCH</h2>
                    <Link href="https://linkedin.in/fuad-olaleye" className="text-white text-sm">LinkedIn</Link>
                    <Link href="https://x.com/theylovefuad" className="text-white text-sm">Twitter</Link>
                    <Link href="" className="text-white text-sm">WhatsApp</Link>
                    <Link href="#" className="text-white text-sm">leyefuad@gmail.com</Link>

                </div>
            </div>
        </footer>

    )
}

export default Footer