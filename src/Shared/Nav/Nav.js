import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/th (1).jpg'
const Nav = () => {
    const navitem = <>
        <li><Link className='text-white'>Sign in </Link></li>
        <li><Link className='text-white'>Sign up</Link></li>
        <li><Link className='text-white'>Dasboard</Link></li>
        <li className='text-red-500'><Link>Sign Out</Link></li>

    </>

    return (
        <div className=" absolute z-[1]  navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navitem}
                    </ul>
                </div>
                <div>
                    <img className='rounded-full inline' style={{ width: '60px', height: '60px' }} src={logo} alt="" /> <b className='text-white ml-3'>MOBILE HAT !!</b>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navitem}
                </ul>
            </div>

        </div>

    );
};

export default Nav;