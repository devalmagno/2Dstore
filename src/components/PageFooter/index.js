import React from 'react';

import './style.css';

function PageFooter() {
    return (
        <div>
            <div className="footer">
                <div className="name">
                    Lúcio Magno
            </div>
                <div className="footer-info">
                    <div className="links">
                        <a href="#">Sobre</a>
                        <span>|</span>
                        <a href="#">Contato</a>
                    </div>
                    <p>©2020 - devALmagno, LLC. Todos os direitos reservados.</p>
                </div>
            </div>
        </div>
    );
}

export default PageFooter;