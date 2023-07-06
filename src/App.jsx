import React from 'react'
import './App.css'

const App =() => {
  const products = [{name:'Cup',price:10,quantity:5},
                    {name:'Table',price:50,quantity:3},
                    {name:'Lamp',price:15,quantity:8}];

const calculateTotalPrice = (product) => {
  return product.price * product.quantity;};

const printProductInfo = (product) => {
  console.log('Name:', product.name);
  console.log('Price:', product.price);
  console.log('Quantity:', product.quantity);
  console.log('Total Price:', calculateTotalPrice(product));
};
return (
  <div>
    <h2>Product Information:</h2>
    {products.map((product, index) => (
      <div key={index}>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Total Price: ${calculateTotalPrice(product)}</p>
      </div>
    ))}
  </div>
);
};


export default App