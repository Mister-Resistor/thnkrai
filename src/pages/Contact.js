import React from 'react';

function Contact(){
    return(
        <div>
            <div className='flex mt-8 mb-10 justify-center'>
                <h1 className=' text-orange-500 font-extrabold text-5xl'>Contact Us</h1>
            </div>
            <div className='grid grid-cols-3 gap-4 m-20'>
                <div>
                    <div className='bg-white p-4 rounded-lg shadow-xl col-span-3 md:col-span-1'>
                        <h1 className='font-bold text-2xl'>
                            Twitter
                        </h1>
                    </div>
                    <div className='mt-4 bg-white p-4 rounded-lg shadow-xl col-span-3 md:col-span-1'>
                        <h1 className='font-bold text-2xl h-96'>
                            Live feed of recent tweets
                        </h1>
                    </div>
                </div>
                

                <div>
                    <div className='bg-white p-4 rounded-lg shadow-xl col-span-3 md:col-span-1'>
                        <h1 className='font-bold text-2xl'>
                            Instagram
                        </h1>
                    </div>
                    <div className='mt-4 bg-white p-4 rounded-lg shadow-xl col-span-3 md:col-span-1'>
                        <h1 className='font-bold text-2xl h-96'>
                            Live feed of recent posts
                        </h1>
                    </div>
                </div>

                <div>
                    <div className='bg-white p-4 rounded-lg shadow-xl col-span-3 md:col-span-1'>
                        <h1 className='font-bold text-2xl'>
                            Linkedin
                        </h1>
                    </div>
                    <div className='mt-4 bg-white p-4 rounded-lg shadow-xl col-span-3 md:col-span-1'>
                        <h1 className='font-bold text-2xl h-96'>
                            Live feed of recent posts
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;