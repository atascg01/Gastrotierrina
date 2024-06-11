import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Navigation.css';
import { SelectedTabContext } from '../../utils/SelectedTabContext';

interface NavigationProps {
    // Add any props you need for your navigation menu component
}

const Navigation: React.FC<NavigationProps> = () => {

    const { selectedTab, setSelectedTab } = useContext(SelectedTabContext);

    return (
        <nav className='navbar'>
            <div className='logo'>
                <a href='/'><img src={logo} alt='Logo' /> </a>
            </div>
            <div className='links'>
                <ul>
                    <div className="nav-item">
                        <i className="fas fa-home"></i>
                        <Link
                            to="/"
                            className={selectedTab === 'home' ? 'selected' : ''}
                            onClick={() => setSelectedTab('home')}
                        >
                            Inicio
                        </Link>
                    </div>
                    <div className="nav-item">
                        <i className="fas fa-utensils"></i>
                        <Link
                            to="/restaurants"
                            className={selectedTab === 'restaurants' ? 'selected' : ''}
                            onClick={() => setSelectedTab('restaurants')}
                        >
                            Restaurantes
                        </Link>
                    </div>
                </ul>
            </div>

        </nav>
    );
};

export default Navigation;