import React from 'react';

import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import logo from '../../assets/images/logo.svg';
import logoMobile from '../../assets/images/logoMobile.svg';

import './style.css';

function Landing() {
    function openBurger() {
        let isOpen = false;
        if (isOpen) isOpen = false
        else isOpen = true

        if (isOpen) return <MenuOpenIcon fontSize="Large" />
        else return <MenuIcon fontSize="Large"/>
    }

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
            <div className="burger" onClick={openBurger()}>
                {openBurger()}
                {/* <div className="MenuIcon isVisible">
                    <MenuIcon fontSize="Large"/>
                </div>
                <div className="MenuOpenIcon isNotVisible">
                    <MenuOpenIcon fontSize="Large" />    
                </div> */}
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