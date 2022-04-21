import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sales from './pages/sales';
import Orders from './pages/orders';
import Products from './pages/products';
import Analytics from './pages/analytics';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="sales" element={<Sales />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="analytics" element={<Analytics />} />
        <Route
          path="*"
          element={
              <span>There's nothing here!</span>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
