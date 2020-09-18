import React from 'react';

import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';
import PageSlider from '../../components/PageSlider';

import './style.css';

function Landing() {
    return (
        <div id="page-content">
            <PageHeader />
            <div className="container">
                <PageSlider />
            </div>
            <PageFooter />
        </div>
    );
}

export default Landing;