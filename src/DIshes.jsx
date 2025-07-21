import React, { useEffect, useState } from 'react';
import './Dishes.css';

const Dishes = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/dishes')
      .then(res => res.json())
      .then(data => setDishes(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {dishes.map(dish => (
        <div className="dish" key={dish.id}>
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
          <p className="price">${dish.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Dishes;
