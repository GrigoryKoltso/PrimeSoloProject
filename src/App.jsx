import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NotFoundPage from './pages/NotFoundPage/index';
import MainPage from './pages/MainPage/index';
import AllProductsPage from './pages/AllProductsPage/index';
import SingleProductPage from './pages/SingleProductPage/index';
import AllSalesPage from './pages/AllSalesPage/index';
import CategoriesPage from './pages/CategoriesPage/index';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage/index';
import CartPage from './pages/CartPage/index';
import Layout from './pages/Layout';
import './App.css'
import FavoritesPage from './pages/FavoritesPage';
import { getAllCategories } from './requests/categories';
import { getAllProducts } from './requests/products';
const App = () => {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getAllCategories)
    dispatch(getAllProducts)
  })
  return (
    <div className='wrapper'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/products/:product_id" element={<SingleProductPage />} />
          <Route path="/sales" element={<AllSalesPage />} />
          <Route path="/categories/" element={<CategoriesPage />} />
          <Route path="/categories/:category_name" element={<ProductsByCategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path='/favorites' element={<FavoritesPage/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
