import React from 'react';
import logoicon from '../images/logo-nature.png';

const Header = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li className="link-pad">
                        <a href="#">Home</a>
                    </li>
                    <li className="link-pad">
                        <a href="#">About</a>
                    </li>
                    <li>
                       <img className="logo" src={logoicon} alt="logo" /> 
                    </li>
                    <li className="link-pad">
                        <a href="#">Info</a>
                    </li>
                    <li className="link-pad">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;