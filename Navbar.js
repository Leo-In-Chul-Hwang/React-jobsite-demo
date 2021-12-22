import React, { useState } from 'react';
import './Navbar.css';
// import logo from './src/logo-share.png';

function Navbar() {
    const [isActive, setActive] = useState(false);
    const clickBtn = document.getElementById('toggleBtn');
 
    function openNav() {
        document.getElementById("slideNav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("slideNav").style.width = "0";
    }

    const handleClick = () => {
        openNav();     
    }

    return (
        <>
            <nav className="navbar sticky-top navbar-dark bg-dark bg-gradient">
                <div className="container-fluid">
                <a href="https://dmdlich.com/"><img src="images/lol.png" alt="KGH logo" /></a>
                    <nav className="navbar navbar-dark">
                        <div className="container">
                            <button id="toggleBtn" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" onClick={openNav}>
                            <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </nav>
                </div>
                <div id="slideNav" className="slideNav2">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                        <h6><a href="https://dmdlich.com/">GO BACK TO DMDLiCH.COM</a></h6>
                </div>
            </nav>
        </>
    )
}

export default Navbar
