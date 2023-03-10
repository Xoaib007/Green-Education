import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Header.css';
import { MDBSwitch } from 'mdb-react-ui-kit';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
        <div className='header'>
            <div className='with-logo'>
                <img className='logo' src={'https://i.ibb.co/FgQrSK0/logo-2.png'} alt=''/>
            <div className='title'>
                <p className='title1'>Green</p>
                <p className='title2'>Education</p>
            </div>
            </div>
            
            <div className='nav-buttons'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/course'>Courses</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/faq'>FAQ</NavLink>
                {   
                    user?.uid ?
                        <div className='d-flex '>
                        <p className='email'>{user.displayName}</p>
                        <button className='logout' onClick={logOut}>Sign Out</button>
                        </div>
                    :
                    <>
                        <Link to='login'>Log In</Link>
                        <Link to='signup'>Sign Up</Link>
                    </>
                }
                <div className='theme'>
                    <MDBSwitch id='flexSwitchCheckDefault' />
                    <p>Dark Theme</p>
                </div>
                
            </div>
        </div>
    );
};

export default Header;