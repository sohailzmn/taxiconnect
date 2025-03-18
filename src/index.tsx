import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Suppress React DevTools console warning in development
// @ts-ignore
const devToolsWarn = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
if (typeof devToolsWarn?.checkDCE === 'function') {
  // @ts-ignore
  devToolsWarn.checkDCE = function () {};
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
