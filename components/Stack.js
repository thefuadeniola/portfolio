import React from 'react'
import { Syne, Manrope } from 'next/font/google'
import { stack } from '../data'
import Image from 'next/image'

const syne = Syne({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })

const Stack = () => {
    return (
        <div id='about' className={`p-4 py-10 justify-center h-fit flex flex-col items-center`}>
            <h1 className={`${syne.className} text-center text-[24px]`}>
                About Me
            </h1>
            <p className={`${syne.className} text-sm font-thin max-w-md text-center md:mt-2`}>Olaleye Fuad is well rounded a fullstack developer.<span className='text-primaryBlue'> Here is a summary of my languages.</span></p>
            <div className='flex flex-wrap gap-6 pt-4  justify-center mt-8 lg:px-32'>
                <Image src='https://github-readme-stats.vercel.app/api/top-langs/?username=thefuadeniola&layout=donut-vertical' height={300} width={300} />
            </div>
        </div>
    )
}

export default Stack