import React from 'react';
import Logo from './../../assets/Logo.png'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
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
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/orders">Orders</Link></li>
                                <li><Link to="/inventory">Manage Inventory</Link></li>
                                <li><Link to="/login">Login</Link></li>
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