import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/th (1).jpg'
import { AuthCotext } from '../../Context/AuthProvider';
const Nav = () => {
    const { google } = useContext(AuthCotext)
    const googleHandler = () => {
        google()
            .then(result => {
                const user = result.user;
                console.log(user.displayName)

                savuser(user?.email, user.displayName,)
            })
            .catch(console.error())
    }
    const savuser = (name, email) => {
        const user = {
            name,
            email,
            user_category: 'buyer'
        }
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        console.log(user)
    }
    const { user, signout } = useContext(AuthCotext)
    const logoutHandler = () => {
        signout()
            .then(() => { })
            .catch(console.error())
    }
    const navitem = <>

        <li className='text-green-500'>{user?.email}</li>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/login'} className=''>Sign in</Link></li>
        <li><Link to={'/register'} className=''>Sign up</Link></li>
        <li><Link className=''>Dasboard</Link></li>
        <li className='text-red-500'><a onClick={logoutHandler} href=''>signOut</a></li>
        <li><button onClick={googleHandler} className='btn  bg-gradient-to-r from-[#FF5733] to-[#C70039] border-none'>Google</button></li>

    </>

    return (
        <div className=" bg-white  navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        {navitem}
                    </ul>
                </div>
                <div>
                    <img className='rounded-full inline' style={{ width: '60px', height: '60px' }} src={logo} alt="" /> <b className=' ml-3'>MOBILE HAT </b>
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