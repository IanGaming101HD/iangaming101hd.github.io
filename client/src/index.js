import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes.js';

const root = document.body;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);