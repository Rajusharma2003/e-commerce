/* eslint-disable no-unused-vars */
import React from 'react'
import CartItems from './CartItems'
import { Button } from '@headlessui/react'


// This is imported form OrderSummeryForm.
const Cart = () => {
  return (
    <div>

        <div className="lg:grid grid-cols-3 lg:px-16 relative">
            {/* this is the first section */}
            <div className='col-span-2'>
            {[1,1,1,1].map((item) => <CartItems/>) }
            </div>
            {/* This is the second section */}
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 '>
              <div className="border p-4 rounded-md"> 
                <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                 <hr />

                 {/* This is the main container */}
                 <div className="space-y-3 font-semibold">
                     {/* first  */}
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Price</span>
                        <span>₹4658</span>
                    </div>
                     {/* second  */}
                    <div className='flex justify-between pt-3 '>
                        <span>Discount</span>
                        <span className='text-green-600'>-₹3124</span>
                    </div>
                     {/* third  */}
                    <div className='flex justify-between pt-3 '>
                        <span>Delivery Charge</span>
                        <span className='text-green-600'>Free</span>
                    </div>
                     {/* fourth  */}
                    <div className='flex justify-between pt-3  font-bold'>
                        <span>Total Amount</span>
                        <span className='text-green-600'>₹1278</span>
                    </div>

                 </div>

                 {/* This is the button  */}
                <button className="bg-[#9155fd] text-white px-8 py-4 mt-2 rounded hover:bg-[#7b4bdf] transition-colors">
                    Checkout
                </button>

              </div>

        </div>
        </div>

        
       
    </div>
  )
}

export default Cart