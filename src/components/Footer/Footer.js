import React from 'react';
import aldi from '../Assets/aldi.png'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container text-center top'>
                    <div className='img'>
                        <img className='footer' src={aldi} alt='' />
                    </div>
                    <p>© 2023. Aldi Budiansah</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
