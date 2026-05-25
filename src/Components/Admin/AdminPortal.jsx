import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import Navbar from '../Navbar'
import About from '../Pages/About'
import ViewMore from '../Pages/ViewMore'
import AddProducts from './AddProducts'
import AddUsers from './AddUsers'
import CartItems from '../Pages/CartItems'

const AdminPortal = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route element={<Home/>} path='/' />
                <Route element={<Products/>} path='/products'/>
                <Route element={<About/>} path='/about'/>
                <Route element={<ViewMore/>} path='/viewmore/:id'/>
                <Route element={<AddProducts/>} path='/addproducts'/>
                <Route element={<AddUsers/>} path='/addusers'/>
                <Route element={<CartItems/>} path='/cartitems'/>
            </Routes>
        </div>
    )
}

export default AdminPortal
