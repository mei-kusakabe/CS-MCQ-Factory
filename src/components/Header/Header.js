import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg bg-light shadow">
                <div className="container bg-light">
                    <img src="https://cdn-icons-png.flaticon.com/512/2641/2641457.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                    <a className="navbar-brand text-info fw-bold px-3" href="/home">CS MCQ Factory</a>
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