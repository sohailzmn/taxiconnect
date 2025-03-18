import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Pages
import { Home, About, Services, Contact, Privacy, Terms, Imprint } from './pages';

// Components
import { Navbar, Footer } from './components';

function App() {
  // Get basename from package.json homepage url if in production
  const basename = process.env.NODE_ENV === 'production' 
    ? '/taxiconnect' 
    : '/';

  return (
    <Router basename={basename}>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ueber-uns" element={<About />} />
          <Route path="/dienstleistungen" element={<Services />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/datenschutz" element={<Privacy />} />
          <Route path="/agb" element={<Terms />} />
          <Route path="/impressum" element={<Imprint />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
