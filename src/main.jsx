import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Use './App' instead of './App.jsx'
import './App.css'; // Import your main stylesheet here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
