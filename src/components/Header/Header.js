import React, { useState } from 'react';
import './Header.css'
import aldi from '../Assets/aldi.png'

const Header = () => {

    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })

    const [Mobile, setMobile] = useState(false)
    
    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        {/*<img className='aldi' src={aldi} alt='' />*/}
                    </div>
        
                
                <div className='navlink'>
                    <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                     {/* <ul className='link f_flex uppercase'>*/} 
                        <li><a href='#home'>Home</a></li>
                        {/* <li><a href='#features'>Features</a></li> <li><a href='#features'>Features</a></li>*/}
                        <li><a href='#portofolio'>PROJECT</a></li>
                        <li><a href='#resume'>Resume</a></li>
                    <li><a href='#clients'>CERTIFICATE</a></li> 
                         {/* <li><a href='#blog'>Blog</a></li> */}
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                    
                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                        {Mobile ?  <i className='fas fa-times close home-btn'></i> :  <i className='fas fa-bars open'></i>} 
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
