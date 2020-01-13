import React from 'react';
import { Link } from 'react-router-dom';
import arlogo from '../../assets/ar-logo.png';
import './header.styles.scss';


const Header = () => (
    <header className="nav-wrapper">
        <div className="header">
            <div className="header__wrapp-logo">
                <figure className="wrapp-logo__wrapper-logo">
                    <Link to='/' className="logo"><img src={arlogo} className="logo"/></Link>            
                </figure>
    
            </div>
            <div className="header__wrapp-form-search">
                <div className="wrapper-form">
                    <form action="/" className="form">
                        <label>
                            <input className="input" type="search"  /> <button className="btn btn-search">search</button>
                        </label>
                    </form> 
                </div>
                
            </div>
            
        </div> 
    </header>
);

export default Header;
