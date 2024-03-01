import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import TheAdminMain from './admin/TheAdminMain.jsx';
import axios from 'axios';

const AppRouterC = () => {
  const location = useLocation();
  const isAdminRoute =
    location.pathname.startsWith("/admin-");
  return isAdminRoute ? <TheAdminMain /> : <App />;
};

axios.defaults.baseURL = 'http://localhost:5000';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="*" element={<AppRouterC />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
