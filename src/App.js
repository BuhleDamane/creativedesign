import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Packages from './Components/Packages';
import Portfolio from './Components/Portfolio';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Packages />
      <Portfolio />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
