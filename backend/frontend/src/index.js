import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import './bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom'; // Single HashRouter

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with the provider and router
root.render(
  <Provider store={store}>
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </HashRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
