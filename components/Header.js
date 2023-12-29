import React from 'react'
import { Manrope } from 'next/font/google'
import Image from 'next/image'
import { github, linkedin, open } from '../assets/assets'

const manrope = Manrope({ subsets: ['latin'] })

const Header = () => {
    return (
        <div className={`${manrope.className} h-[400px] bg-pink px-[25px] pt-[50px] relative`}>
            <h2 className='tracking-wide font-bold text-sm'>OLALEYE FUAD  |  FULLSTACK DEVELOPER</h2>
            <h1 className='title tracking-tighter'>Unleashing creativity on the web through code</h1>
            <div className='border-l-2 border-black px-6 py-0 max-w-md text-sm font-regular h-fit mt-4'>
                <p className='text-sm font-regular'>
                    Taking development beyond the scope of coding, I have built problem solving projects and worked with clients to transform their brands.
                    Walk with me.
                </p>
                <div className='flex flex-row items-center space-x-2 pt-4'>
                    <p className='underline text-md font-semibold'>Skip to Github</p>
                </div>
            </div>
            <Image src={open} height={60} width={60} className='absolute bottom-8 right-5' alt='Open For Work' />
        </div>
    )
}

export default Header