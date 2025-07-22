// src/components/CheckoutPage.jsx

import React, { useState } from 'react';

function CheckoutPage({ cartItems, onOrderPlaced, onRemoveItem }) {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');

  // 👉 Group items by name and count them
  const groupedItems = cartItems.reduce((acc, item) => {
    const existing = acc.find((i) => i.name === item.name);
    if (existing) {
      existing.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const totalAmount = groupedItems.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      items: groupedItems,
      total_amount: totalAmount,
      customer_name: customerName,
      address: address,
    };

    const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });

    if (response.ok) {
      onOrderPlaced();
    } else {
      alert('Error placing order!');
    }
  };

  return (
    <main className="checkout-page">
      <h2>Checkout</h2>

      <div className="order-summary">
        <h3>Your Items:</h3>
        <ul>
          {groupedItems.map((item, index) => (
            <li key={index} className="order-item">
              <span>
                {item.name} × {item.quantity} — {item.price}
              </span>
              <button
                className="remove-item"
                onClick={() => onRemoveItem(index)}
                title="Remove Item"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
        <p className="total-amount">
          <strong>Total: ${totalAmount.toFixed(2)}</strong>
        </p>
      </div>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </label>
        <label>
          Address:
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="place-order">
          ✅ Place Order
        </button>
      </form>
    </main>
  );
}

export default CheckoutPage;
