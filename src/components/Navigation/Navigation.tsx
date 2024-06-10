import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Navigation.css';

interface NavigationProps {
    // Add any props you need for your navigation menu component
}

const Navigation: React.FC<NavigationProps> = () => {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <a href='/'><img src={logo} alt='Logo' /> </a>
            </div>
            <div className='links'>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/restaurants">Restaurantes</Link></li>
                </ul>
            </div>

        </nav>
    );
};

export default Navigation;