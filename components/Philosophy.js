import React from 'react'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

const Philosophy = () => {
    return (
        <div className={`flex items-center justify-center mt-16`}>
            <div class="border radial-repeating flex flex-col items-center justify-center max-w-md">
                <h1 className='my-4'>My Coding Philosophy</h1>
                <div className='border-t-2 flex items-center justify-center'>
                    <p className={`${manrope.className} text-center max-w-md text-sm py-6`}>
                        Commitment to clarity, efficiency, and adaptability. I prioritize clean and well-documented code to ensure that collaborative teams can comprehend and maintain  over time.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Philosophy