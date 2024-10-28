import './App.css'
import Footer from './customers/components/Footer/Footer'
import Navigation from './customers/components/Navigation/Navigation'
import Product from './customers/components/Product/Product'
import HomePage from './customers/pages/HomePage/HomePage'
import ProductDetails from './customers/components/ProductDetails/ProductDetails'
import Cart from './customers/components/Cart/Cart'
import Checkout from './customers/components/Checkout/Checkout'
import Order from './customers/components/Order/Order'
import OrderDetails from './customers/components/Order/OrderDetails'
import CustomerRouters from './Routers/CustomerRouters.'
import { Route, Router } from 'react-router-dom'

function App() {

  return (

    // This is for navigation bar.
   <div className="">

 
        <Route path='/*' element={<CustomerRouters/>}></Route>
    


      

    {/* This is for carousle */}
      <div>
       {/* <HomePage/> */}
       {/* <Product/> */}
       {/* <ProductDetails/> */}
       {/* <Cart/> */}
       {/* <Checkout/> */}
       {/* <Order/> */}
       {/* <OrderDetails/> */}
       {/* <CustomerRouters/> */}
    </div>


{/* This is the footer section */}
      <div>
       
    </div>


    </div>
    
  )
}

export default App
