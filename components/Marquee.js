import React from 'react'
import { Syne } from 'next/font/google'

const syne = Syne({ subsets: ['latin'] })

const Marquee = () => {
    return (
        <div class="container md:hidden">
            <div class="horizontal-scrolling-items">

                <div className={` ${syne.className} horizontal-scrolling-items__item text-sm flex flex-row space-x-6 items-center h-[40px] bg-[#42c3e5] mt-1`}>
                    <span className='font-bold'>Next JS</span>
                    <span className='font-bold'>React</span>
                    <span className='font-bold'>Node JS</span>
                    <span className='font-bold'>Mongo DB</span>
                    <span className='font-bold'>Tailwind</span>
                    <span className='font-bold'>Wordpress</span>
                    <span className='font-bold'>JQuery</span>
                    <span className='font-bold'>Next JS</span>
                    <span className='font-bold'>React</span>
                    <span className='font-bold'>Node JS</span>
                    <span className='font-bold'>Mongo DB</span>
                    <span className='font-bold'>Tailwind</span>

                </div>



            </div>

        </div>)
}

export default Marquee