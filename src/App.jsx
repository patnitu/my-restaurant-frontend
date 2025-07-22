import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Menu from './components/Menu';
import CheckoutPage from './components/CheckoutPage';
import OrdersPage from './components/OrdersPage'; // ✅ Import it

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('menu');
  const [ordersCategory, setOrdersCategory] = useState('all'); // ✅ Add this

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleGoToMenu = () => {
    setCurrentPage('menu');
  };

  const handleCheckoutClick = () => {
    setCurrentPage('checkout');
  };

  const handleOrderPlaced = () => {
    setCartItems([]);
    setCurrentPage('menu');
    alert('✅ Order placed! Thank you!');
  };

  const handleRemoveItem = (indexToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };

  // ✅ The missing one:
  const handleSelectOrdersCategory = (category) => {
    setOrdersCategory(category);
    setCurrentPage('orders');
  };

  return (
    <div className="app-container">
      <Header
        cartCount={cartItems.length}
        onCheckoutClick={handleCheckoutClick}
        onGoToMenu={handleGoToMenu}
      />
      <div className="body-container">
        <LeftSidebar onSelectOrdersCategory={handleSelectOrdersCategory} />
        {currentPage === 'menu' && <Menu onAddToCart={handleAddToCart} />}
        {currentPage === 'checkout' && (
          <CheckoutPage
            cartItems={cartItems}
            onOrderPlaced={handleOrderPlaced}
            onRemoveItem={handleRemoveItem}
          />
        )}
        {currentPage === 'orders' && (
          <OrdersPage category={ordersCategory} />
        )}
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
