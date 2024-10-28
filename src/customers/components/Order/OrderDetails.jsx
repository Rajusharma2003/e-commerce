/* eslint-disable no-unused-vars */
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracking from './OrderTracking'
import { Box, colors, Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { deepPurple } from '@mui/material/colors'


const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>

    {/* This is the Address section */}
      <div className="">
        <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
        <AddressCard/>  
      </div>
 
      {/* This is the orderTrackin */}
      <div className='py-20'>
        <OrderTracking activeStep={3}/>
      </div>

      {/* This is the Grid for the product status */}
      <Grid className="space-x-5" container>
{[1,1,1,1,1].map((items) =>  <Grid key={items} item container className="shadow-xl rounded-md p-5 border" sx={{alignItems:"center" , justifyContent: "space-between"}}>

                {/* This is the grid card */}
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                      <img  className='w-[5rem] h-[5rem] object-cover object-top' 
                      src="https://image.shutterstock.com/image-photo/model-wearing-plain-black-tshirt-260nw-721361305.jpg" alt="jens image" />
                    </div>

                    <div className="space-y-2 ml">
                      <p className='font-semibold'>women Slim Mid Rise Blue Jens</p>
                      <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color: Pink</span> <span>Size : M</span></p>
                      <p>Seller : linaria</p>
                      <p>₹1999</p>
                    </div>
                </Grid>

                {/* This is another gird for rating */}
                <Grid item> 
                    <Box sx={{color:deepPurple[500]}}>
                        <StarBorderIcon sx={{fontSize: "2rem"}} className='px-2 text-5xl'/>
                        <span>Rate & Review Product</span>
                    </Box>
                </Grid>


          </Grid>
 )}
        
      </Grid>



    </div>
  )
}

export default OrderDetails