import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
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
            </div>
        </div>
    );
};

export default Header;