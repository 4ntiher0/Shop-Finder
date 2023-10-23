// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import ShopListPage from './routes/ShopListPage';
import ContactPage from './routes/ContactPage';
import AddShopForm from './components/AddShopForm'; // Import the new component

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/list" element={<ShopListPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/addShop" element={<AddShopForm />} /> {/* Add this line */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
