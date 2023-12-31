import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props) {

    const handleMouseEnter = (e) => {
        console.log("DISPLAY")
    }

    const handleMouseLeave = (e) => {
    }
     

    return(
        <div>
            <div className="flex justify-around bg-gray-200 content-center align-middle">
                <Link to="/thnkrai">
                    <div className=' w-16'>
                        <img src="logo-transparent-png.png" className="w-16"/>
                    </div>
                </Link>

                <div className="flex md:visible md:z-0 md:relative absolute -z-10 invisible">
                <Link to="/thnkrai">
                    <div className="py-5 px-8 m-2 font-bold bg-white rounded-lg hover:bg-orange-500 hover:text-white">
                        <h1>Home</h1>
                    </div>
                </Link>
                <Link to="/thnkrai/about">
                    <div className="py-5 px-8 m-2 font-bold bg-white rounded-lg hover:bg-orange-500 hover:text-white">
                        <h1>About</h1>
                    </div>
                </Link>
                <Link to="/thnkrai/product">
                    <div className="py-5 px-8 m-2 font-bold bg-white rounded-lg hover:bg-orange-500 hover:text-white">
                        <h1>Product</h1>
                    </div>
                </Link>
                <Link to="/thnkrai/pricing">
                    <div className="py-5 px-8 m-2 font-bold bg-white rounded-lg hover:bg-orange-500 hover:text-white">
                        <h1>Pricing</h1>
                    </div>
                </Link>
                <Link to="/thnkrai/contact">
                    <div className="py-5 px-8 m-2 font-bold bg-white rounded-lg hover:bg-orange-500 hover:text-white">
                        <h1>Contact</h1>
                    </div>
                </Link>
                <Link to="/thnkrai/docs">
                    <div className="py-5 px-8 m-2 font-bold bg-white rounded-lg hover:bg-orange-500 hover:text-white">
                        <h1>Docs</h1>
                    </div>
                </Link>
                </div>

                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-16 pt-2 md:invisible visibl'>
                    <img src="menu_icon.png" className='align-self-center p-2'/>
                </div>
                
            </div>

            <div>
                {}
            </div>
        </div>
        
    );
}

export default NavBar;