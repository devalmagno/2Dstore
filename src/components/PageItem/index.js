import React from 'react';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import './style.css';

function Item() {
    return (
        <li className="item-content">
            <div className="item-box">
                <img src="https://lojanerdz.com.br/app/uploads/2020/03/nerdzre-zero-light-novel-12.jpg" alt="Re:Zero Vol. 12" />

                <div className="prod-info">
                    <p>Re:Zero Volúme 12</p>

                    <div className="prices">
                        <div className="no-descont">
                            <span>de</span>
                            <span className="no-descont-price">R$ 24,99</span>
                        </div>
                        <div className="descont">
                            <span>por</span>
                            <span className="descont-on">R$ 16,89</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cartAdd">
                <AddShoppingCartIcon fontSize="Large" />
            </div>
        </li>
    );
}

export default Item;