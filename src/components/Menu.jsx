// src/components/Menu.jsx

import React from 'react';

// Import local images from your assets folder
import bibimbapImg from '../assets/food1.jpg';
import bulgogiImg from '../assets/food2.jpg';
import kimchiImg from '../assets/food3.jpg';
import tteokbokkiImg from '../assets/food4.jpg';
import japchaeImg from '../assets/food5.jpg';
import samgyupsalImg from '../assets/food6.jpg';

const foodItems = [
  {
    id: 1,
    name: 'Bibimbap',
    description: 'Warm rice bowl topped with seasoned veggies, beef, fried egg, and spicy gochujang.',
    price: '$12.99',
    image: bibimbapImg,
  },
  {
    id: 2,
    name: 'Bulgogi',
    description: 'Thin slices of marinated beef grilled with garlic and onions, served with rice.',
    price: '$15.99',
    image: bulgogiImg,
  },
  {
    id: 3,
    name: 'Kimchi Jjigae',
    description: 'Hot and spicy kimchi stew with pork belly, tofu, and veggies.',
    price: '$10.99',
    image: kimchiImg,
  },
  {
    id: 4,
    name: 'Tteokbokki',
    description: 'Spicy stir-fried rice cakes in sweet chili sauce, a popular Korean street snack.',
    price: '$8.99',
    image: tteokbokkiImg,
  },
  {
    id: 5,
    name: 'Japchae',
    description: 'Sweet potato glass noodles stir-fried with veggies and beef.',
    price: '$11.99',
    image: japchaeImg,
  },
  {
    id: 6,
    name: 'Samgyupsal',
    description: 'Grilled pork belly slices served with dipping sauces and fresh lettuce wraps.',
    price: '$16.99',
    image: samgyupsalImg,
  },
];

function Menu({ onAddToCart }) {
  return (
    <main className="main-content">
      {foodItems.map((item) => (
        <div className="food-card" key={item.id}>
          <img src={item.image} alt={item.name} className="food-image" />
          <div className="food-details">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
            <button className="add-to-cart" onClick={() => onAddToCart(item)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Menu;
