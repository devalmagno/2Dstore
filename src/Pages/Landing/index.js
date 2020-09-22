import React from 'react';

import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';
import PageItem from '../../components/PageItem';

import './style.css';

function Landing() {
    return (
        <div id="page-content">
            <PageHeader />
            <div className="container">
                <h1>OFERTAS DA SEMANA!</h1>
                <div className="items">
                    <PageItem />
                    <PageItem />
                    <PageItem />
                    <PageItem />
                </div>
            </div>
            <PageFooter />
        </div>
    );
}

export default Landing;