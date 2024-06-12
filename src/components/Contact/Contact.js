import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import contact1 from './a.png';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preval) => ({
            ...preval,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_difajxh', 'template_7oese6o', form.current, 'mFcj4MymQrPXTiAO3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        alert(
            `My name is ${data.from_name}.
            My email address is ${data.from_email}.
            Here is my message: ${data.message}.`
        );
    };

    return (
        <>
            <section className='Contact' id='contact'>
                <div className='container top'>
                    <div className='heading text-center'>
                        <h4>CONTACT</h4>
                        <h1>Contact With Me</h1>
                    </div>

                    <div className='content d_flex'>
                        <div className='left'>
                            <div className='box box_shadow'>
                                <div className='img'>
                                    <img src={contact1} alt='contact' />
                                </div>
                                <div className='details'>
                                    <h1>Aldi Budiansah</h1>
                                    <p>Maha Santri</p>
                                    <p>I am available for freelance work. Connect with me via</p>
                                    <br />
                                    <p>Phone: 083873253237</p>
                                    <br />
                                    <p>Email: aldithursina05@gmail.com</p>
                                    <br />
                                    <span>FIND WITH ME</span>
                                    <div className='button f_flex'>
                                        <button className='btn_shadow'>
                                            <a href="https://www.facebook.com/profile.php?id=100065298143537" target="_blank" rel="noopener noreferrer">
                                                <i className='fab fa-whatsapp'></i>
                                            </a>
                                        </button>

                                        <button className='btn_shadow'>
                                            <a href="https://www.instagram.com/yldish_/" target="_blank" rel="noopener noreferrer">
                                                <i className='fab fa-telegram'></i>
                                            </a>
                                        </button>

                                        <button className='btn_shadow'>
                                            <a href="https://twitter.com/home?lang=id" target="_blank" rel="noopener noreferrer">
                                                <i className='fab fa-twitter'></i>
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='right box_shadow'>
                            <form ref={form} onSubmit={sendEmail}>
                                
                                    <div className='input'>
                                        <span>YOUR NAME</span>
                                        <input type='text' name='from_name' value={data.from_name} onChange={InputEvent} />
                                    </div>
                                
                                <div className='input'>
                                    <span>EMAIL</span>
                                    <input type='email' name='from_email' value={data.from_email} onChange={InputEvent} />
                                </div>
                                <div className='input'>
                                    <span>YOUR MESSAGE</span>
                                    <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                                </div>
                                <button className='btn_shadow' type='submit' value='Send'>
                                    SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
