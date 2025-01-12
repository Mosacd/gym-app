import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboardLayout';
import Main from './pages/mainPage';
import { ThemeProvider } from './components/theme/theme-provider';
import Products from './pages/productsPage';

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme='light' storageKey="vite-ui-theme">
    <Routes>  
    <Route path="/" element={<Navigate to='dashboard/main' replace />} />

      <Route path ='dashboard' element={<DashboardLayout />}>
        <Route index path='main' element={<Main/>} />
        <Route path='products' element={<Products/>} />
      </Route>
      
    </Routes>
    </ThemeProvider>
  );
};

export default App;
