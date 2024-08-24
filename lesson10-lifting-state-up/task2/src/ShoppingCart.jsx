import React, { useState } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

const ShoppingCart = ({ userName }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'iPhone 11', price: 999 },
    { id: 2, name: 'iPad Pro', price: 799 },
    { id: 3, name: 'MacBook Pro', price: 1299 },
    { id: 4, name: 'Apple Watch', price: 399 },
    { id: 5, name: 'Apple TV', price: 199 },
    { id: 6, name: 'AirPods', price: 249 },
    { id: 7, name: 'Mac Studio', price: 1999 },
  ]);

  return (
    <div className="column">
      <CartTitle count={cartItems.length} userName={userName} />
      <ProductsList cartItems={cartItems} />
    </div>
  );
};

export default ShoppingCart;
