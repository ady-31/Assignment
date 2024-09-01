import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProduct from './Components/AddProduct';  // Updated path
import ProductList from './Components/ProductList';  // Updated path
import Navbar from './Components/Navbar';  // Updated path

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/admin" element={<AddProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
