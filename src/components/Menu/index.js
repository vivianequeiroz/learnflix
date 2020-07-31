import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button'

//import ButtonLink from '../components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="LearnFlix logo" />
            </a>

            <Button as="a" className="Button" href="/">
                Nova playlist
            </Button>
        </nav>
    );
}

export default Menu; 