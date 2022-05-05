import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sales from './pages/sales/sales';
import Orders from './pages/orders/orders';
import Products from './pages/products/products';
import Analytics from './pages/analytics/analytics';
import Clients from './pages/clients/clients';
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
        <Route path="clients" element={<Clients />} />
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
