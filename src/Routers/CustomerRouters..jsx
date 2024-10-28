/* eslint-disable no-unused-vars */
import React from 'react'
import Navigation from '../customers/components/Navigation/Navigation.jsx'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customers/pages/HomePage/HomePage'
import Cart from '../customers/components/Cart/Cart'
import Footer from '../customers/components/Footer/Footer.jsx'
import Product from '../customers/components/Product/Product.jsx'

const CustomerRouters = () => (
    <div>

        <div>
        <Navigation/>
        </div>

        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
        </Routes>

        <div>
        <Footer/>
        </div>
    </div>
)

export default CustomerRouters



