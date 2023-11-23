import React from 'react';

function Home(){
    return(
        <div>
            <div className='flex mt-8 mb-10 justify-center'>
                <h1 className=' text-orange-500 font-extrabold text-5xl'>Home</h1>
            </div>
            <div className='grid grid-cols-4 gap-4 m-20'>
                <div className='bg-white p-4 rounded-lg shadow-xl lg:col-span-2 col-span-4'>
                    <h1 className='font-bold text-2xl'>
                        Revolutionizing B2B Platforms
                    </h1>
                    <p className='my-4 text-gray-400'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    
                    
                </div>

                <div className='bg-white rounded-lg shadow-xl lg:col-span-2 col-span-4'>
                    <img className='h-full w-auto rounded-lg' src=" thnkrai/office.avif"/> 
                </div>
            </div>
        </div>
    );
}               

export default Home;