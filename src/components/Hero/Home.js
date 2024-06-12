import React from 'react';
import './Home.css'
import aldi from '../Assets/hero.png'
import Portofolio from './portofolio.pdf'
import skill3 from '../Assets/skill3.png'
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {
    return (
        <>
            <section className='hero' id='home'>
                <div className='container f_flex top'>
                    <div className='left top'>
                        <h3>WELCOME</h3>
                        <h1>
                            Hi, I'm <span>Aldi Budiansah</span>
                        </h1>
                        <h2>
                            a 
                            <span> 
                                <Typewriter words={[" Maha Santri.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                            </span>
                        </h2>

                        <p>“I am Aldi, a student at PeTIK Jombang. I majored in Software Development. At PeTIK I learned HTML, CSS, JavaScript, React JS, Figma, UI/UX, Mobile and Islamic boarding school science.“</p>
                        <div className='hero_btn d_flex'>
                            <div className='col_1'>
                                <h4>FIND WITH ME</h4>
                                <div className='button'>
                                    <button className='btn_shadow'>
                                    <a href="https://www.facebook.com/profile.php?id=100065298143537" target="_blank" rel="noopener noreferrer">
                                        <i className='fab fa-facebook-f'></i>
                                        </a>
                                    </button>
                                    <button className='btn_shadow'>
                                    <a href="https://www.facebook.com/username" target="_blank" rel="noopener noreferrer">
                                        <i className='fab fa-instagram'></i>
                                        </a>
                                    </button>
                                    <button className='btn_shadow'>
                                    <a href="https://www.linkedin.com/in/aldi-yldish/" target="_blank" rel="noopener noreferrer">
                                        <i className='fab fa-linkedin-in'></i>
                                        </a>
                                    </button>
                                </div>
                            </div>

                             <div className='dowload'> 
                                <button className='btn_shadow'>
                                    <a href={Portofolio} download>
                                        <h3><b>Dowload CV</b></h3>
                                    </a>
                                </button>
                            </div> 
                        </div>
                    </div>

                    <div className="right">
                        <div className="right_img">
                            <img src={aldi} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
