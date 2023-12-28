import React from 'react'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })


const Hero = () => {
    return (
        <div className={`${manrope.className} h-[300px] bg-lightBlue pt-[50px] pl-[20px]`}>
            <h1 className='text-[#219ebc] title'>Olaleye Fuad,</h1>
            <h1 className='title text-lightBlue drop-shadow-custom'>
                Fullstack Developer
            </h1>

        </div>
    )
}

export default Hero