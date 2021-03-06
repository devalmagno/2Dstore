import React from 'react';

import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';
import PageItem from '../../components/PageItem';
import ProductBox from '../../components/ProductBox';

import './style.css';

function Landing() {
    return (
        <div id="page-content">
            <PageHeader />
            <div className="container">
                <h1>OFERTAS DA SEMANA!</h1>
                <ul className="promotionItems">
                    <PageItem />
                    <PageItem />
                    <PageItem />
                    <PageItem />
                    <PageItem />
                </ul>
                <div className="products">
                    <div className="items">
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                    </div>
                </div>
            </div>
            <PageFooter />
        </div>
    );
}

export default Landing;