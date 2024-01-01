'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { hamburger, logo } from '../assets/assets'
import { Syne } from 'next/font/google'

const syne = Syne({ subsets: ['latin'] })


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className={` ${syne.className} bg-white h-[60px] flex flex-row items-center px-4 justify-between nav ${!isOpen && 'shadow-sm'} fixed top-0 right-0 left-0 p-0 z-10`}>
                <div className='flex flex-row space-x-2 items-center'>
                    <Image src={logo} height={50} width={50} alt='logo' />
                    <h1 className='text-primary'>theFuad</h1>
                </div>
                <div className='flex flex-row items-center space-x-4'>
                    <Link href='#contact' className='text-primaryBlue'>Contact Me</Link>
                    <Image src={hamburger} height={30} width={20} alt='menu' onClick={() => setIsOpen((oldOpen) => !oldOpen)} className='pointer' />
                </div>
            </div>
            <div className={`menu ${syne.className} ${isOpen ? 'h-[200px] shadow-sm' : 'h-[0px]'} justify-center fixed top-[60px] left-0 right-0 bg-white z-10`}>
                <div className='quick_access w-full flex items-center justify-center h-[35px]'>
                    <h2 className='text-primaryBlue text-center'> Quick Access </h2>
                </div>
                <div className='flex flex-col justify-center items-center py-4 space-y-3'>
                    <Link href='#philosophy'>About Me</Link>
                    <Link href='#experience'>Work Experience</Link>
                    <Link href='#projects'>Projects I've Worked On</Link>
                    <Link href='https://github.com/thefuadeniola'>Go to GitHub</Link>

                </div>
            </div>
        </>
    )
}

export default Navbar