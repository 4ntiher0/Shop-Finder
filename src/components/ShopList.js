// components/ShopList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShopList() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/shops')
      .then(response => setShops(response.data.shops))  // Access the 'shops' property
      .catch(error => console.error('Error fetching shops:', error));
  }, []);

  return (
    <div>
      <h2>List of Shops</h2>
      <ul>
        {shops.map(shop => (
          <li key={shop._id}>{shop.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShopList;
