"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import NavLink from './NavLink';

const Header = () => {
    const pathname=usePathname();
    console.log(pathname);

    if(pathname.startsWith("/dashboard")) return <></>

    return (
        <header className="px-6 py-3 border-b-2 border-gray-500 flex justify-between items-center flex-wrap">
            <Link href="/" className="text-2xl font-semibold text-cyan-800">Learning App 🤖</Link>
            <nav className='space-x-4'>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/register">Register</NavLink>
                <NavLink href="/login">Login</NavLink>
                <NavLink href="/tutorials">Tutorials</NavLink>
                <NavLink href="/about/contact">Contact</NavLink>
                <NavLink href="/about/teams">Teams</NavLink>
            </nav>
        </header>
    );
};

export default Header;