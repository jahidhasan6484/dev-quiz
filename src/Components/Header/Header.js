import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container">
               <Link to="/" className="logo">Dev Quiz</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/">Topic</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/static'>Static</Link>
                        </li>
                        <li class="nav-item">
                           <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;