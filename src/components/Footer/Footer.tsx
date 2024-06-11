import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer>
            <hr className="footer-divider" />
            <div className="footer-content">
                <a href="/">
                    <h2>Gastrotierrina</h2>
                </a>
                <div className="footer-icons">
                    <a href="https://www.instagram.com/gastrotierrina" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.tiktok.com/@gastrotierrina" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-tiktok"></i>
                    </a>
                    <a href="mailto:gastrotierrina@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a onClick={scrollToTop} className="scroll-to-top" title='Vuelve al comienzo'>
                        <i className="fa-solid fa-chevron-up"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;