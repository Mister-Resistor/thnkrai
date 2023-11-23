import React from 'react';

function Pricing(){
    return(
        <div>
            <div className='flex mt-8 mb-10 justify-center'>
                <h1 className=' text-orange-500 font-extrabold text-5xl'>Pricing</h1>
            </div>
            <div className='grid grid-cols-3 gap-4 m-20'>
                <div className='bg-white p-4 rounded-lg shadow-xl col-span-3 md:col-span-1'>
                    <h1 className='font-bold text-2xl'>
                        Economy
                    </h1>
                    <p className='my-4 text-gray-400'>
                        Your basic package for the every-day consumer.
                    </p>
                    <ul className='my-4 text-gray-400'>
                        <li>✔ This</li>
                        <li>✔ That</li>
                        <li>✔ The other thing</li>
                    </ul>
                    <h1 className='font-bold text-2xl bottom-0'>
                        $5/mo
                    </h1>
                </div>

                <div className='bg-white p-4 rounded-lg shadow-xl col-span-3 md:col-span-1'>
                    <h1 className='font-bold text-2xl'>
                        Premium
                    </h1>
                    <p className='my-4 text-gray-400'>
                        A plan for frequent users. This is our most common package.
                    </p>
                    <ul className='my-4 text-gray-400'>
                        <li>✔ This</li>
                        <li>✔ That</li>
                        <li>✔ The other thing</li>
                        <li>✔ Yatta</li>
                        <li>✔ Yatta</li>
                        <li>✔ Yatta</li>
                    </ul>
                    <h1 className='font-bold text-2xl'>
                        $15/mo
                    </h1>
                </div>

                <div className='bg-white p-4 rounded-lg shadow-xl col-span-3 md:col-span-1'>
                    <h1 className='font-bold text-2xl'>
                        Enterprise
                    </h1>
                    <p className='my-4 text-gray-400'>
                        A plan for businesses and professionals.
                    </p>
                    <ul className='my-4 text-gray-400'>
                        <li>✔ This</li>
                        <li>✔ That</li>
                        <li>✔ The other thing</li>
                        <li>✔ Yatta</li>
                        <li>✔ Yatta</li>
                        <li>✔ Yatta</li>
                        <li>✔ Whole lotta stuff</li>
                        <li>✔ Even more features?</li>
                        <li>✔ The kitchen sink</li>
                    </ul>
                    <h1 className='font-bold text-2xl'>
                        $100/mo
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Pricing;