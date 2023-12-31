
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap';
import { BrowserRouter } from 'react-router-dom';
import './config/global';
import ProductContextProvider from './pages/Contaxt/ProductContext';
import AuthContextProvider from './pages/Contaxt/AuthContaxt';
import CartProductContextProvider from './pages/Contaxt/CartProductContaxt';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ProductContextProvider>
          <CartProductContextProvider>
            <App />
          </CartProductContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
