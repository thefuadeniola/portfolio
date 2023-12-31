import React from 'react'
import { Syne, Manrope } from 'next/font/google'
import Image from 'next/image'
import { thebldbrand } from '../assets/assets'
import Link from 'next/link'

const syne = Syne({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })


const Experience = () => {
    return (
        <div id='experience' className={`${syne.className} p-4 pt-6 mt-10 mb-10 flex flex-col items-center justify-center`}>
            <h1 className='text-center text-[24px]'>
                My Work Experience
            </h1>
            <p className='text-sm font-thin max-w-md text-center md:mt-2'>I've worked with the following businesses to scale their business reach<span className='text-primaryBlue'> through the web</span></p>
            <div className='pt-4 mt-8 flex justify-center'>
                <div className='flex flex-col max-w-md bld p-4 bg-white shadow-md'>
                    <Image src={thebldbrand} height={150} width={400} className='bld__image' />
                    <div className={`${manrope.className} mt-4`}>
                        <h1 className='text-[20px] font-bold mt-2 mb-2'>THEBLDBRAND</h1>
                        <p className='text-sm'>Responsible for:</p>
                        <div className='border-l-2 border-black h-fit text-sm mt-2 mb-4 px-4 flex flex-col space-y-2'>
                            <p>Modifying the look and feel of desktop site via wordpress.</p>
                            <p>Full development and scalability of mobile view.</p>
                            <p>Implementation of Google analytics to foster insights.</p>
                            <p>Modifying backend issues with rudimentary knowledge of PHP.</p>
                        </div>
                        <Link href='https://www.thebldbrand.com' className='underline text-primaryBlue text-sm'>View Website.</Link>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Experience