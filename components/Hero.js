import React from 'react'
import { Manrope } from 'next/font/google'
import { Syne } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })



const Hero = () => {
    return (
        <div className={`${manrope.className} hero h-[300px] pt-[50px]`}>
            <div className='h-[150px] pl-[30px]'>
                <h1 className='title text-white'>Unleashing Creativity on the Web</h1>
                <p className='text-white max-w-sm'>
                    Welcome to Fuad's world, where I take you through my works in transforming the web development experience.
                </p>
                <div className={`flex flex-row space-x-2 pt-4`}>
                    <button className='visit text-primaryBlue font-bold'>Github</button>
                    <button className='visit text-primaryBlue font-bold'>LinkedIn</button>

                </div>

            </div>
            <div className='banner--fadeBottom' />

        </div>
    )
}

export default Hero