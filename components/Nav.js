import React from 'react'
import Image from 'next/image'
import { hamburger, logo } from '@/assets/assets'

const Nav = () => {
    return (
        <div className='bg-white h-[60px] flex flex-row items-center px-4 justify-between nav shadow-sm'>
            <div className='flex flex-row space-x-2 items-center'>
                <Image src={logo} height={50} width={50} alt='logo' />
                <h1 className='text-primary'>Fuad O., Fullstack Dev.</h1>
            </div>
            <div className='flex flex-row items-center space-x-4'>
                <h2 className='text-primaryBlue'>Contact Me</h2>
                <Image src={hamburger} height={30} width={20} alt='menu' />
            </div>
        </div>
    )
}

export default Nav