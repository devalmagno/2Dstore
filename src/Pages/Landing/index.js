import React from 'react';

import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import logo from '../../assets/images/logo.svg';
import logoMobile from '../../assets/images/logoMobile.svg';

import './style.css';

function Landing() {
    return (
        <div id="header">
            <img src={logoMobile} alt="2D" className="logo logoMobile" />
            <img src={logo} alt="2Dstore" className="logo logoDesktop" />
            <div className="search">
                <input type="text" className="searchText" />
                <button className="btn-search">
                    <SearchIcon style={{ color: '#FDFFFC'}} />
                </button>
            </div>
            <div className="burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className="login">
                <li>
                    <Button>Login</Button>
                </li>
                <li>
                    <Button variant="contained" color="secondary">Registrar</Button>
                </li>
            </ul>
        </div>
    );
}

export default Landing;