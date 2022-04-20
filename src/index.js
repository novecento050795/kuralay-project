import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sales from './pages/sales';
import Orders from './pages/orders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="sales" element={<Sales />} />
        <Route path="orders" element={<Orders />} />
        <Route
          path="*"
          element={
              <span>There's nothing here!</span>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  root
);

reportWebVitals();
