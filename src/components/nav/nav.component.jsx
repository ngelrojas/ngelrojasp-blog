import React from 'react';
import { Link } from 'react-router-dom';
import './nav.styles.scss';


const NavMenu = () => (
    <nav className="nav-menu">
        <ul className="wrapper-menu">
            <li className="menu__item"><Link to='/'>home</Link></li>
            <li className="menu__item"><Link to='/topics'>topics</Link></li>
            <li className="menu__item"><Link  to='/angel-rojas'>about-me</Link></li>
            <li className="menu__item"><Link  to='/contact'>contact</Link></li>
            <li className="menu__item"><Link to='/news'>news</Link></li>
        </ul>
    </nav>
);

export default NavMenu;
