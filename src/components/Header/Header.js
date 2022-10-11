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
                                <Link to='/blog'>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/statistics'>Statistics</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className='header-section p-5 text-center bg-image'>
                <div className="mask">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-black">
                            <h1 className="mb-5 text-white">CS MCQ Factory</h1>
                            <h4 className="mb-3 fst-italic">My favorite thing in the world is a quiz show, ‘University Challenge,’<br></br> so you can see what kind of sad person I am.” ~ Lynne Truss</h4>
                            <a className="mb-3 btn btn-outline-light btn-lg fw-bold" href="#!" role="button"
                            >Take quizes</a
                            >
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Header;