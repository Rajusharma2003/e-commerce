/* eslint-disable no-unused-vars */
import React from 'react'
import './ProductCard.css'

const ProductCard = ({Product}) => {
  return (
    <div className='ProductCard w-[15rem] m-3 transition-all ease-in-out cursor-pointer'>
        <div className='h-[20rem]'>
            <img className='h-full w-full object-cover object-left-top' src={Product.imageUrl} alt="women image" />
        </div>

        <div className='textPart bg-white p-3'>
            <div className="">
                <p className='font-bold opacity-60'>{Product.brand}</p>
                <p>{Product.title}</p>
            </div>
            <div className="flex items-center space-x-2">
              <p className='font-semibold'>₹{Product.discountedPrice}</p>
              <p className='line-through opacity-50'>{Product.price}</p>
              <p className='text-green-600 font-semibold'>{Product.discountPersent}% off</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard