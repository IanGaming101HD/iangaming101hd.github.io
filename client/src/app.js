import React from 'react';
import AppRoutes from './routes/AppRoutes.jsx';
// import { AuthProvider } from './context/AuthContext';
import './styles/index.css';

function App() {
  return (
    // <AuthProvider>
      <AppRoutes />
    // </AuthProvider>
  );
}

export default App;