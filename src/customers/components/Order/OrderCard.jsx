/* eslint-disable no-constant-binary-expression */
/* eslint-disable no-unused-vars */
import { Grid } from '@mui/material'
import React from 'react'

// This is mui icon Adjust.
import AdjustIcon from '@mui/icons-material/Adjust';

// This card is imported from 
const OrderCard = () => {
  return (
    <div className='p-5 shadow-md shadow-black hover:shadow-2xl'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

            <Grid item xs={6}>
                <div className="flex cursor-pointer">
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://image.shutterstock.com/image-photo/model-wearing-plain-black-tshirt-260nw-721361305.jpg" alt="model with jens" />

                {/* this is the image content */}
                <div className="ml-5 space-y-2">
                    {/* title */}
                    <p className=''>women Slim Mid Rise Blue Jens </p>
                    <p className='opacity-50 text-xs font-semibold'>Size : M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color : Blue </p>
                </div>
            </div>
            </Grid>

            {/* This is the price section */}
            <Grid item xs={2}>
                <p className="">₹199</p>

            </Grid>

            {/* This is the Right side details section */}
            <Grid item xs={4}>
                {/* first */}
               {true && <div>
                
               <p>
                {/* This is the delivery status */}
                <AdjustIcon sx={{width:"15px" , height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                    <span> 
                        Deliverd on march 03
                    </span>
                    </p>

                    {/* this is sub para */}
                    <p className='text-xs'>
                        Your Items Has Been Deliverd
                    </p>
               </div> }
                
                {/* second */}
                {false && <p>
                    <span> 
                    Expected Deliverd on march 03
                    </span>
                </p>}

            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard 