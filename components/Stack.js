import React from 'react'
import { Syne, Manrope } from 'next/font/google'
import { stack } from '../data'
import Image from 'next/image'

const syne = Syne({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })

const Stack = () => {
    return (
        <div className={`${syne.className} p-4 py-10 justify-center h-fit`}>
            <h1 className='text-center text-[24px]'>
                What Makes me Fullstack?
            </h1>
            <p className='text-sm font-thin max-w-md text-center'>My mastery of the following technologies make me a well rounded developer,<span className='text-primaryBlue'> skilled for all your requirements.</span></p>
            <div className='flex flex-wrap gap-16 pt-4  justify-center mt-8'>
                {
                    stack.map((skill) => {
                        return (
                            <div key={skill.name} className='flex flex-col space-y-2 justify-center items-center'>
                                <Image src={skill.image} alt={skill.name} height={100} width={100} />
                                <h1 className={`${manrope.className} text-[#333]`}>{skill.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Stack