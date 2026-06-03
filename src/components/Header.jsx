import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="px-6 py-3 border-b-2 border-gray-500 flex justify-between items-center flex-wrap">
            <Link href="/" className="text-2xl font-semibold text-cyan-800">Learning App 🤖</Link>
            <nav className='space-x-4'>
                <Link href="/about">About</Link>
                <Link href="/register">Register</Link>
                <Link href="/login">Login</Link>
                <Link href="/about/contact">Contact</Link>
                <Link href="/about/teams">Teams</Link>
            </nav>
        </header>
    );
};

export default Header;