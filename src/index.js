import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/redux';
import { connectFirstCard } from './redux/connect';



store.dispatch(connectFirstCard())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
    
    <App />
  
  </Provider>
 
);


