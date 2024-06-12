import React from 'react';
import Header from './components/Header/Header';
import './App.css'
import Home from './components/Hero/Home';
// import Features from './components/Features/Features';
import Portofolio from './components/Portofolio/Portofolio';
import Resume from './components/Resume/Resume';
import Testimonial from './components/Testimonials/Testimonial';
// import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Features /> */}
      <Portofolio />
      <Resume />
      <Testimonial />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
