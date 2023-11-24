import React from 'react';

function Product(){
    return(
        <div>
            <div className='flex mt-8 mb-10 justify-center'>
                <h1 className=' text-orange-500 font-extrabold text-5xl'>Our Product</h1>
            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-4 font-sans text-left mx-20 my-20'>
                <div className='bg-white p-4 rounded-lg shadow-xl'>
                    <h1 className='font-bold text-2xl mx-4'>
                        What is thnkrAI?
                    </h1>
                    <p className='my-4 mx-4 text-gray-400'>
                        ThnkrAI is a startup that leverages the power of artificial intelligence and statistical models to revolutionize the way you can price anything. With our pricing solutions, anyone can now easily and accurately determine the value of any item. Join us on our mission to bring the power of advanced analytics and pricing to everyone.
                    </p>
                </div>
                <div className='bg-white p-4 rounded-lg shadow-xl'>
                    <h1 className='font-bold text-2xl mx-4'>
                    What we stand for
                    </h1>
                    <p className='my-4 mx-4 text-gray-400'>
                    Our core mission is to bring price transparency and fairness to consumers. We firmly believe that every individual deserves access to accurate and reliable pricing information for all products. We strive to provide consumers with a comprehensive understanding of pricing dynamics, enabling them to make informed decisions and ensuring a level playing field.
                    </p>
                </div>
                <div className='bg-white p-4 rounded-lg shadow-xl'>
                    <h1 className='font-bold text-2xl mx-4'>
                    Our Vision - Pricing insights for all
                    </h1>
                    <p className='my-4 mx-4 text-gray-400'>
                    Not everyone has the time, knowledge, or access to comprehensive pricing information. At thnkrAI, we bridge this gap by providing pricing research, insights, and data-driven solutions. Our vision is to empower individuals with the confidence and understanding to navigate complex marketplaces effortlessly, ensuring price transparency and fairness for all.
                    </p>
                </div>
                <div className='bg-white p-4 rounded-lg shadow-xl'>
                    <h1 className='font-bold text-2xl mx-4'>
                    Why we started
                    </h1>
                    <p className='my-4 mx-4 text-gray-400'>
                    After years of conducting statistical pricing analysis in the automotive industry, we discovered a significant gap in the market. While car-value estimators were readily available, there was a distinct absence of estimators for everyday products. This realization fueled our mission to provide pricing insights and knowledge for all types of consumer goods.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Product;