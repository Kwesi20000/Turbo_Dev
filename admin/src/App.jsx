import React from 'react'
import Navbar from './Components/Navbar/navbar'
import Sidebar from './Components/Sidebar/sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/add'
import List from './pages/List/list'
import Order from './pages/Order/order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/order" element={<Order/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App