import React from 'react';
import { Link } from 'react-router-dom';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import './Home.css'

const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <div className='container register bg-primary text-white d-flex flex-column flex-lg-row align-items-center p-5 w-175 h-100'>
                <div className='text w-50 d-flex flex-column justify-content-center'>
                    <h3>Ready to join?</h3>
                    <p className='pt-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='text-dark w-50 d-flex justify-content-center align-items-center'>
                    <button type="button" className="btn btn-outline-primary bg-white btn-lg">
                        <Link to='/signup'>Register Now</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;