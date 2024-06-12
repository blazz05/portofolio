import React from 'react';
import Porfolio_data from './Porfolio_data';
import './Portofolio.css'
import Card from './Card';

const Portofolio = () => {
    return (
        <>
            <section className='portofolio top' id='portofolio' >
                <div className='container'>
                    <div className='heading text-center'>
                        <h4>VISIT MY PROJECT AND KEEP YOUR FEEDBACK</h4>
                        <h1>My Project</h1>
                    </div>

                    <div className='content grid'>
                        {Porfolio_data.map((val, index) => {
                            return <Card key={index} image={val.image} category={val.category} title={val.title} />
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Portofolio;
