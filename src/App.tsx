import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboardLayout';
import Main from './pages/mainPage';
import { ThemeProvider } from './componentsShadcn/theme/theme-provider';
import Products from './pages/productsPage';
import ProductDetail from './pages/singleProductPage';
import CartPage from './pages/cartPage';
import Profile from './pages/profilePage';
import IdOrder from './pageComponents/idOrder/idOrder';
import LogIn from './pageComponents/logIn/logIn';
import Register from './pageComponents/register/register';


const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme='light' storageKey="vite-ui-theme">
    <Routes>  
    <Route path="/" element={<Navigate to='dashboard/main' replace />} />

      <Route path ='dashboard' element={<DashboardLayout />}>
        <Route index path='main' element={<Main/>} />
        <Route path='products' element={<Products/>} />
        <Route path='productDetail' element={<ProductDetail/>} />
        <Route path='cartPage' element={<CartPage/>} />
        <Route path='profilePage' element={<Profile/>} />
        <Route path='idOrder' element={<IdOrder/>} />
        <Route path='signIn' element={<LogIn/>} />
        <Route path='register' element={<Register/>} />
      </Route>
      
    </Routes>
    </ThemeProvider>
  );
};

export default App;
