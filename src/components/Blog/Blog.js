import React from 'react';
import BlogApi from './BlogApi';
import Card from './Card'
import '../Portofolio/Portofolio.css'
import './Blog.css'

const Blog = () => {
    return (
        <>
            <section className='portofolio blog' id='blog'>
                <div className='container top'>
                    <div className='heading text-center'>
                        <h4>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h4>
                        <h1>My Blog</h1>
                    </div>

                    <div className='content grid'>
                        {BlogApi.map((value, index) => {
                            return <Card key={index} image={value.image} date={value.date} title_one={value.title_one} title_two={value.title_two} title_three={value.title_three} desc_one={value.desc_one} desc_two={value.desc_two} desc_three={value.desc_three} />
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog;
