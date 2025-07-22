// src/components/OrdersPage.jsx

import React, { useEffect, useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
function OrdersPage({ category }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      let url = `${API_BASE_URL}/orders`;
      if (category === 'pending') url = `${API_BASE_URL}/orders/status/pending`;
      if (category === 'completed') url = `${API_BASE_URL}/orders/status/completed`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchOrders();
  }, [category]);

  return (
    <main className="orders-page">
      <h2 className="orders-title">📜 {category.charAt(0).toUpperCase() + category.slice(1)} Orders</h2>
      {orders.length === 0 ? (
        <p className="no-orders">No orders found.</p>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Items</th>
              <th>Total</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Status</th>
              <th>Placed At</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>
                  <ul>
                    {JSON.parse(order.items).map((item, idx) => (
                      <li key={idx}>{item.name} — {item.price}</li>
                    ))}
                  </ul>
                </td>
                <td>${order.total_amount.toFixed(2)}</td>
                <td>{order.customer_name}</td>
                <td>{order.address}</td>
                <td className={`status ${order.status}`}>{order.status}</td>
                <td>{new Date(order.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

export default OrdersPage;
