import Image from 'next/image'
import React from 'react'

function Nav() {
    return (
        // <div className="navbar bg-primary shadow-md rounded-md ">
        <div className="navbar bg-base-100 shadow-md rounded-md ">
            <div className="flex-1" >
                <a className="btn btn-ghost normal-case text-xl">Salmon Sound 🎧</a>
            </div >
            <div className="flex-none gap-2">
                <div className="form-control">
                    <h1 className='font-medium'>Suphakit Songsuwong</h1>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image src="/profile.jpeg" alt='image' width={1000} height={1000} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Nav