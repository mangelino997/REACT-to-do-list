import React, { Fragment } from 'react';
import myWeb from '../img/global.png';
const Footer = () => {
    return (
        <Fragment>
            <div className="footer">
                <div className="text-center py-1">
                    <a href="https://mangelino997.github.io/my-web/" 
                    target="_blank" className="my-web">
                    Marcio Angelino   <img src={myWeb}></img>
                 </a>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;