import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShopListPage from '../routes/ShopListPage';
import ContactPage from '../routes/ContactPage';
import ShopList from './ShopList';

function Body() {
  return (
    <div className="body">
      <h1>Home Page</h1>
      {/* Add your content here */}
     <p> This is my shitty app to save fake shop data.</p><p>  Click shop list to see a list of shops and click Add Shop to uh add a shop to the list.. duh :/</p><p> Great thanks.... and that is all, for now....</p>
      <br />
    </div>
  );
}

export default Body;
