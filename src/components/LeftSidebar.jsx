// src/LeftSidebar.jsx

import React, { useState } from 'react';

function LeftSidebar({ onSelectOrdersCategory }) {
  // Expand/collapse state for each section
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <aside className="left-sidebar">
      <div className="sidebar-item">
        <div className="sidebar-title" onClick={() => toggleItem('inventory')}>
          📦 Inventory
        </div>
        {openItem === 'inventory' && (
          <ul className="sidebar-submenu">
            <li>Add Item</li>
            <li>Update Item</li>
            <li>View Stock</li>
          </ul>
        )}
      </div>

      <div className="sidebar-item">
        <div className="sidebar-title" onClick={() => toggleItem('orders')}>
          🧾 Orders
        </div>
        {openItem === 'orders' && (
          <ul className="sidebar-submenu">
            <li onClick={() => onSelectOrdersCategory('all')}>View Orders</li>
            <li onClick={() => onSelectOrdersCategory('pending')}>Pending Orders</li>
            <li onClick={() => onSelectOrdersCategory('completed')}>Completed Orders</li>
          </ul>
        )}
      </div>

      <div className="sidebar-item">
        <div className="sidebar-title" onClick={() => toggleItem('settings')}>
          ⚙️ Settings
        </div>
        {openItem === 'settings' && (
          <ul className="sidebar-submenu">
            <li>Profile</li>
            <li>Users</li>
            <li>Preferences</li>
          </ul>
        )}
      </div>
    </aside>
  );
}

export default LeftSidebar;
