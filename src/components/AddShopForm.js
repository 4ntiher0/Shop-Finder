import React, { useState } from 'react';
import axios from 'axios';


function AddShopForm() {
  const [shopName, setShopName] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3000/addShop', { shopName: shopName }) // Ensure 'shopName' matches the key used in the backend (req.body.shopName)
      .then(response => {
        console.log('Shop added successfully:', response.data);
        setShopName(''); // Reset the input field after successful submission
      })
      .catch(error => console.error('Error adding shop:', error));
  }

  return (
    <div>
      <h2>Add a Shop</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={shopName} 
          onChange={(e) => setShopName(e.target.value)} 
          placeholder="Enter shop name" 
        />
        <button type="submit">Add Shop</button>
      </form>
    </div>
  );
}

export default AddShopForm;
