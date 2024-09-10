import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import Packages from './Components/Packages';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Packages />
      <Portfolio />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
