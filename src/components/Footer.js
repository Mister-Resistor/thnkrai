import React from 'react';

function Footer()
{
    return (
        <div className='bg-orange-100 flex justify-between p-10'>
            <div className='flex-col align-middle'>
                <img className='w-20' src="thnkrai/logo-transparent-png.png"/>
                <p>
                By © thnkrAI Inc. 
                </p>
                <p>
                All Rights Reserved. 
                </p>
                <p>
                founders@thnkrai.com
                </p>
            </div>

            <div className='flex-col align-middle'>
                <p className=' text-center'>
                    Connect
                </p>
                <div className="flex justify-center items-center gap-2">
                    <a href="https://twitter.com/thnkrAI">
                        <img className="" src="thnkrai/twitter.svg" width="20"/>
                    </a>
                    <a href="https://www.instagram.com/thnkrai.inc/">
                        <img className="" src="thnkrai/instagram.svg" width="20"/>
                    </a>
                    <a href="https://www.linkedin.com/company/thnkrai/">
                        <img className="" src="thnkrai/linkedin.svg" width="20"/>
                    </a>
                </div>
            </div>
            
        </div>
    );
}

export default Footer;