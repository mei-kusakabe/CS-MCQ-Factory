import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">CS MCQ Factory</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/quizes'>Quizes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/blog'>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/statistics'>Statistics</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Header;