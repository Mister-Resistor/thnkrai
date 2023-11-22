import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props){


    return(
        <div className="flex justify-around bg-gray-200 content-center align-middle">
            <Link to="/">
                <img src="thnkrai/logo-transparent-png.png" className="w-16"/>
            </Link>

            <div className="flex">
            <Link to="/">
                <div className="py-5 px-8 m-2 font-bold bg-white rounded-lg hover:bg-orange-500 hover:text-white">
                    <h1>Home</h1>
                </div>
            </Link>
            <Link to="/about">
                <div className="py-5 px-8 m-2 font-bold bg-white rounded-lg hover:bg-orange-500 hover:text-white">
                    <h1>About</h1>
                </div>
            </Link>
            <Link to="/product">
                <div className="py-5 px-8 m-2 font-bold bg-white rounded-lg hover:bg-orange-500 hover:text-white">
                    <h1>Product</h1>
                </div>
            </Link>
            <Link to="/pricing">
                <div className="py-5 px-8 m-2 font-bold bg-white rounded-lg hover:bg-orange-500 hover:text-white">
                    <h1>Pricing</h1>
                </div>
            </Link>
            <Link to="/contact">
                <div className="py-5 px-8 m-2 font-bold bg-white rounded-lg hover:bg-orange-500 hover:text-white">
                    <h1>Contact</h1>
                </div>
            </Link>
            <Link to="/docs">
                <div className="py-5 px-8 m-2 font-bold bg-white rounded-lg hover:bg-orange-500 hover:text-white">
                    <h1>Docs</h1>
                </div>
            </Link>
            </div>

            <div className='w-16'>
                
            </div>
            
        </div>
    );
}

export default NavBar;