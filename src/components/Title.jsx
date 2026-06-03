import React from 'react';

const Title = ({children}) => {
    return (
        <div className='bg-linear-60 from-sky-100 to-sky-700 p-3 rounded-xl'>
            <h2 className='text-2xl text-center text-black font-bold'>{children}</h2>
        </div>
    );
};

export default Title;