import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'



function Nav() {

    return (
        // <div className="navbar bg-primary shadow-md rounded-md ">
        <div className="shadow-md text-base-content w-full grid place-items-center sticky bg-base-100 top-0 z-50">
            <div className='navbar w-11/12'>

                <div className="flex-1" >
                    <a className="btn btn-ghost normal-case text-xl text-base-content font-extrabold ">Mood & Sound 🎧</a>
                </div >
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <h1 className='hidden sm:block font-medium'>Suphakit Songsuwong</h1>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image src="/profile.jpeg" alt='image' width={1000} height={1000} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a target='_blank' href='https://github.com/biskitsx'>
                                    <FontAwesomeIcon icon={faGithub} />
                                    Github
                                    {/* <span className="badge">New</span> */}
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href='https://suphakit.vercel.app/'>
                                    <FontAwesomeIcon icon={faGlobe} />
                                    Website
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Nav