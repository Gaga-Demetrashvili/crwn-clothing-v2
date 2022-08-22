import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
// import { UserProvider } from './contexts/user.context';
// import { CategoriesProvider } from './contexts/categories.context';
// import { CartProvider } from './contexts/cart.context';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from './store/store';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* Can not reach down and get data from ProductsProvider */}
      {/* <UserProvider> */}
      {/* Can reach up and get data from UserProvider */}
      {/* <CategoriesProvider> */}
      {/* <CartProvider> */}
      <PersistGate loading={null} persistor={persistor}>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </PersistGate>
      {/* </CartProvider> */}
      {/* </CategoriesProvider> */}
      {/* </UserProvider> */}
    </BrowserRouter>
  </Provider>
);
