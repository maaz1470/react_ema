import React from 'react';
import Logo from './../../assets/Logo.png'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="row">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="menu">
                        <nav>
                            <ul>
                                <li><a href="#">Order</a></li>
                                <li><a href="#">Order Review</a></li>
                                <li><a href="#">Manage Inventory</a></li>
                                <li><a href="#">Login</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="mobile-menu">
                        <FontAwesomeIcon icon={faBarsStaggered} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;