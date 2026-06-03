"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
    const router=useRouter();
    const handleBtn=()=>{
        const password=prompt("Enter Your Password");
        if(password=="1234"){
            console.log(router);
            router.push("/dashboard");
        }
    }
    return (
        <div className='text-center space-y-8 bg-linear-60 from-cyan-200 to-cyan-800 py-4 rounded-2xl'>
            <h2 className='text-4xl font-bold'>Welcome to Dev-Story</h2>
            <button onClick={handleBtn} className='p-2 text-xl font-bold cursor-pointer text-white rounded-xl bg-amber-900 hover:bg-fuchsia-950'>Share-Story</button>
        </div>
    );
};

export default Banner;