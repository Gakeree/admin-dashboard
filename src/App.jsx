import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Categories from './pages/Categories'
import './App.css'
import Customers from './pages/Customers'
import Products from './pages/Products'
import Inventory from './pages/Inventory'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/products' element={<Products />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}






