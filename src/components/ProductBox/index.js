import React, { useState } from 'react';
import styled from 'styled-components';

import nameofwind from '../../assets/images/nameofwind.jpg';

import './style.css';

function ProductBox() {
    const [isShown, setIsShown] = useState(false);
    {isShown && console.log(true)}

    return (
        <div className="product-box">
            <div 
                className="orderButtonBox"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                {isShown && (
                    <button className="orderButton">Comprar</button>
                )}
            </div>

            <img className="productIMG" src={nameofwind} alt="Livro"/>
        </div>
    );
}

export default ProductBox;