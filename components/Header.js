import React from 'react'
import { Manrope, Syne } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { github, linkedin, open, illustration } from '../assets/assets'

const manrope = Manrope({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })


const Header = () => {
    return (
        <div className={`${manrope.className} h-fit bg-[#42c3e5] px-[25px] pt-[50px] pb-[40px] relative md:px-12 flex flex-row`}>
            <div className='m-auto'>
                <h2 className='tracking-wide font-bold text-sm'>OLALEYE FUAD  |  FULLSTACK DEVELOPER</h2>
                <h1 className={`${syne.className} title tracking-tighter uppercase text-[28px] md:text-[36px] max-w-xl`}>Unleashing creativity on the web</h1>
                <div className='border-l-2 border-black px-6 py-0 max-w-md text-sm font-regular h-fit mt-4'>
                    <p className='text-sm font-regular'>
                        Taking development beyond the scope of coding, I have built problem solving projects and worked with clients to transform their brands.
                        Walk with me.
                    </p>
                    <div className='flex flex-row items-center space-x-2 pt-4'>
                        <Link href='https://github.com/thefuadeniola' className='underline text-md font-semibold'>Skip to Github</Link>
                    </div>
                </div>

            </div>
            <div className='hidden md:flex items-center justify-center w-1/2'>
                <Image src={illustration} width={300} height={500} />
            </div>
            <Image src={open} height={60} width={60} className='absolute bottom-8 right-5' alt='Open For Work' />
        </div>
    )
}

export default Header