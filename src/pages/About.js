import React from 'react';

function About(){
    return(
        <div>
            <div className='flex mt-8 mb-10 justify-center'>
                <h1 className=' text-orange-500 font-extrabold text-5xl'>Meet The Team</h1>
            </div>


            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 font-sans text-center m-4 mx-20'>
                <div className='bg-white p-4 rounded-lg shadow-xl'>
                    <div class="flex justify-center">
                        <img src="Andrew_Headshot.png" className=' rounded-full border-2 border-orange-500 my-2 w-2/3'/>
                    </div>
                    <h1 className='font-bold text-2xl'>
                        Andrew Sommers
                    </h1>
                    <p className='my-4 text-gray-400'>
                        Andrew is a current student at UVA with extensive experience conducting statistical pricing analysis on the automotive industry. He also is one of the founding partners of Homeroom Fund, a high-school led VC that invests in early and seed-stage startups.
                    </p>
                    <h1 className='font-bold mb-4'>
                        Co-Founder and CEO
                    </h1>
                    <div class="flex justify-center">
                        <a href="https://www.linkedin.com/in/andrew-somersprofile/">
                            <img className=" items-center" src="linkedin.svg" width="20"/>
                        </a>
                    </div>
                </div>
                <div className='bg-white p-4 rounded-lg shadow-xl'>
                    <div class="flex justify-center">
                        <img src="Aditya_headshot.jpeg" className=' rounded-full border-2 border-orange-500 my-2 w-2/3'/>
                    </div>
                    <h1 className='font-bold text-2xl'>
                        Aditya Behera
                    </h1>
                    <p className='my-4 text-gray-400'>
                    Aditya is a current student at Georgia Tech with vast experience in computer science and machine learning. He has built data structures, storage, and collection methods as well as AI models at Columbia University and George Mason University.
                    </p>
                    <h1 className='font-bold mb-4'>
                        Co-Founder and CTO
                    </h1>
                    <div class="flex justify-center">
                        <a href="https://www.linkedin.com/in/aditya-behera-link/">
                            <img className=" items-center" src="linkedin.svg" width="20"/>
                        </a>
                    </div>
                </div>
                <div className='bg-white p-4 rounded-lg shadow-xl'>
                    <div class="flex justify-center">
                        <img src="Ben_headshot.png" className=' rounded-full border-2 border-orange-500 my-2 w-2/3'/>
                    </div>
                    <h1 className='font-bold text-2xl'>
                        Ben Jen
                    </h1>
                    <p className='my-4 text-gray-400'>
                    Ben is a seasoned entrepreneur and is very active in venture capital. He has been involved in many startups in the capacity as a co-founder/founder, executive, strategist, investor, and mentor. Ben has a passion in investing and building.
                    </p>
                    <h1 className='font-bold mb-4'>
                        Advisor
                    </h1>
                    <div class="flex justify-center">
                        <a href="https://www.linkedin.com/in/benjenonline/">
                            <img className=" items-center" src="linkedin.svg" width="20"/>
                        </a>
                    </div>
                </div>

                <div className='bg-white p-4 rounded-lg shadow-xl'>
                    <div class="flex justify-center">
                        <img src="Wesley_Headshot.jpg" className=' rounded-full border-2 border-orange-500 my-2 w-2/3'/>
                    </div>
                    <h1 className='font-bold text-2xl'>
                        Wesley Hu
                    </h1>
                    <p className='my-4 text-gray-400'>
                    Wesley is an experienced machine learning engineer with time spent building convoluted neural networks to diagnose lung and colon cancers using his neural networks learning and predicting abilities. Wesley published these findings in a research paper.
                    </p>
                    <h1 className='font-bold mb-4'>
                        Machine Learning Specialist
                    </h1>
                    <div class="flex justify-center">
                        <a href="https://www.linkedin.com/in/wesley-hu-01a094266/">
                            <img className=" items-center" src="linkedin.svg" width="20"/>
                        </a>
                    </div>
                </div>
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

export default About;