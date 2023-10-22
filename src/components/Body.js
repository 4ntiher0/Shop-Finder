import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../routes/AboutPage';
import ContactPage from '../routes/ContactPage';
import ShopList from './ShopList';

function Body() {
  return (
    <div className="body">
      <h1>Home Page</h1>
      {/* Add your content here */}
      <ShopList />
    </div>
  );
}

export default Body;
