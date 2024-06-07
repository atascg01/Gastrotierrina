import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

interface NavigationProps {
    // Add any props you need for your navigation menu component
}

const Navigation: React.FC<NavigationProps> = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/restaurants">Restaurantes</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;