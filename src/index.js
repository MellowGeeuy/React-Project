import React from 'react';
import { createRoot } from 'react-dom/client'; // CreateRoot แทน ReactDOM
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Item from './component/Item';




// REACT 18
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
