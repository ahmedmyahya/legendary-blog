import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import * as SVGs from '../Assets';
import './App.css';

function Hamburger() {

    const [menuState, setMenuState] = useState(false);

    const path = useLocation().pathname;

    useEffect(() => {
        toggleMenu();
    }, [path])


    const Menu = () => {
        return (
            <nav className={`${menuState ? 'nav-opened' : 'hidden'}`}>
                <ul>
                    <li>
                        <Link className='link' to="/">Home</Link>
                    </li>
                    <li>
                        <Link className='link' to="/company">Company</Link>
                    </li>
                    <li>
                        <Link className='link' to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link className='link' to="/philosophy">Philosophy</Link>
                    </li>
                    <li>
                        <Link className='link' to="/recognition">Recognition</Link>
                    </li>
                </ul>
            </nav>
        );
    }

    const toggleMenu = () => {
        setMenuState(!menuState);
    };
    return (
        <div>
            <Menu />
            <div className='close-menu' style={{ visibility: menuState ? 'visible' : 'hidden' }} onClick={() => toggleMenu()}><img src={SVGs.close} alt='close' /></div>
            <div className='hamburger' onClick={() => toggleMenu()}>{<img src={SVGs.hamburger} alt='hamburger' />}</div>
            <Outlet />
        </div>
    )
}

export default Hamburger