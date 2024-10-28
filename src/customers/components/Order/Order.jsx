/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid } from '@mui/material'
import OrderCard from './OrderCard'

// This is the order status.
const orderStatus =[
    {lable : "On the Way" , value : "on_the_way"},
    {lable : "Delivered" , value : "delivered"},
    {lable : "Cancelled" , value : "cancelled"},
    {lable : "Returned" , value : "returned"},
]

const Order = () => {
  return (
    <div className=' px-5 lg:px-20'>

        {/* This is left site grid */}
        <Grid container sx={{justifyContent:'space-between'}}>
            <Grid item xs={2.5}>
                <div className="h-auto shadow-lg bg-white p-5 sticky top-5">

                    {/* This is the heading */}
                    <h1 className='font-bold text-lg'>Filter</h1>
                     <div className='space-y-4 mt-10'>
                        <h1 className='font-semibold'>ORDER STATUS</h1>

                     {orderStatus.map((option) =>    <div key={option} className='flex items-center'>
                            <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border-gray-300 text-indigo-600
                             focus:ring-indigo-500' name="" id="" />
    
                             <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                                {option.lable}
                             </label>
                        </div>)}

                     </div>
                </div>
            </Grid>

            {/* one right side grid */}
            <Grid item xs={9}>
                <div className="space-y-5">
                {[1,1,1,1,1,1].map((items) =>  <OrderCard/>)}
                </div>
               
            </Grid>
        </Grid>
    </div>
  )
}

export default Order