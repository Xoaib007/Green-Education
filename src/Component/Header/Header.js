import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Header.css'

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
        <div className='header'>
            <img className='logo' src={'https://i.ibb.co/FgQrSK0/logo-2.png'} alt=''/>
            <div className='title'>
                <p className='title1'>Green</p>
                <p className='title2'>Education</p>
            </div>
            <div className='nav-buttons'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/course'>Courses</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/faq'>FAQ</NavLink>
                {   
                    user?.uid ?
                        <div className='d-flex '>
                        <p className='email'>{user.email}</p>
                        <button className='logout' onClick={logOut}>Sign Out</button>
                        </div>
                    :
                    <>
                        <Link to='login'>Log In</Link>
                        <Link to='signup'>Sign Up</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;