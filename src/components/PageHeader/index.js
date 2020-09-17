import React from 'react';

import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShopIcon from '@material-ui/icons/Shop';

import logo from '../../assets/images/logo.svg';
import logoMobile from '../../assets/images/logoMobile.svg';

import './style.css';

function PageHeader() {
    return (
        <div>
            <div id="header">
                <img src={logoMobile} alt="2D" className="logo logoMobile" />
                <img src={logo} alt="2Dstore" className="logo logoDesktop" />
                <div className="search">
                    <input type="text" className="searchText" />
                    <button className="btn-search">
                        <SearchIcon style={{ color: '#FDFFFC' }} />
                    </button>
                </div>
                <div className="burger">
                    <div className="menuIcon">
                        <MenuIcon fontSize="Large" />
                    </div>
                    <div className="menuOpenIcon">
                        <MenuOpenIcon fontSize="Large" />
                    </div>
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
            <div className="header-info">
                <a href="#">Faça o login para continuar</a>
                <div className="orders">
                    <a href="#" className="carrinho">
                        <span>CARRINHO</span>
                        <ShoppingCartIcon fontSize="small" />
                    </a>
                    <a href="#" className="pedidos">
                        <span>PEDIDOS</span>
                        <ShopIcon fontSize="small" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;