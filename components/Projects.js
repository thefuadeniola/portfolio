'use client'
import React from 'react'
import { projects } from '../data'
import { Syne, Manrope } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const syne = Syne({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })

const rest = projects.slice(1)


const Projects = () => {

    return (
        <div id='projects' className={`${syne.className} px-4 pt-6 mb-10 justify-center flex flex-col items-center`}>
            <h1 className='text-center text-[24px]'>
                My Personal Projects
            </h1>
            <p className='text-sm font-thin text-center max-w-md md:mt-2'><span className='text-primaryBlue'>Even more impressive, </span>I have an array of captivating personal problems, implementing web development technologies in <span className='text-primaryBlue'>solving real world problems.</span></p>
            <div className='pt-4 mt-8 flex flex-col space-y-6 justify-center'>

                <div className='flex flex-wrap gap-6 justify-center'>

                    <div className='md:shadow-md flex flex-col max-w-sm md:max-w-[350px] bld p-4 hover:bg-white'>
                        <Image src={projects[0].image} height={150} width={400} className='bld__image' />
                        <div className={`${manrope.className} mt-4`}>
                            <h1 className='text-[20px] font-bold mt-2 mb-2'>{projects[0].name}</h1>
                            <div className='flex flex-col space-y-4 mb-4 font-thin md:font-light'>
                                <p className='text-sm'>{projects[0].summary}</p>
                                <p className='text-sm tech'> {projects[0].technologies}</p>

                            </div>
                            <Link href={projects[0].link} className='underline text-primaryBlue text-sm'>View Website.</Link>
                        </div>

                    </div>

                    {
                        rest.map((project) => {
                            return (
                                <div key={project.name} className='md:shadow-md flex flex-col max-w-sm md:max-w-[350px] bld p-4 hover:bg-white '>
                                    <Image src={project.image} height={150} width={400} className='bld__image' />
                                    <div className={`${manrope.className} mt-4`}>
                                        <h1 className='text-[20px] font-bold mt-2 mb-2'>{project.name}</h1>
                                        <div className='flex flex-col space-y-4 mb-4 font-thin md:font-light'>
                                            <p className='text-sm'> {project.summary}</p>
                                            <p className='text-sm tech'>{project.technologies}</p>

                                        </div>
                                        <div className='flex flex-row space-x-2 items-center'>
                                            <Link href={project.link} className='underline text-primaryBlue text-sm'>View Website.</Link>
                                            <span>|</span>
                                            <Link href={project.github} className='underline text-primaryBlue text-sm'>View GitHub.</Link>

                                        </div>
                                    </div>

                                </div>

                            )
                        })
                    }

                </div>

            </div>
        </div>

    )
}

export default Projects