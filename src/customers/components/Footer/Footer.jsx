/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from 'react'
import {Grid, Typography} from '@mui/material'
import { Link } from 'react-alice-carousel'


const Footer = () => {
  return (
    <div>

        <Grid className='bg-black text-white text-center mt-10'
        container
        sx={{bgcolor : "black" , color : "white" , py : 3}}
        >

            <Grid item >
                <Typography className='pb-5' variant='6'> Company </Typography>
                <div> 
                <button className='pb-5' variant='6'> About </button>
                </div>
                <div>
                <button className='pb-5' variant='6'> Blog </button>
                </div>
                <div>
                <button className='pb-5' variant='6'> Press </button>
                </div>
                <div>
                <button className='pb-5' variant='6'> Jobs </button>
                </div>
                <div>
                <button className='pb-5' variant='6'> Partners </button>
                </div>
            </Grid>

            {/* This is other section */}
            <Grid item >
                <Typography className='pb-5' variant='6'> Solution </Typography>
                <div> 
                <button className='pb-5' variant='6'> Markerting </button>
                </div>
                <div>
                <button className='pb-5' variant='6'> Analytics </button>
                </div>
                <div>
                <button className='pb-5' variant='6'> Commerce </button>
                </div>
                <div>
                <button className='pb-5' variant='6'> Insights </button>
                </div>
                <div>
                <button className='pb-5' variant='6'> Supports </button>
                </div>
            </Grid>

            {/* This is other section */}
            <Grid item >
                <Typography className='pb-5' variant='6'> Documentations </Typography>
                <div> 
                <button className='pb-5' variant='6'> Guides </button>
                </div>
                <div>
                <button className='pb-5' variant='6'> Api Status </button>
                </div>
               
            </Grid>

            {/* This is other section */}
            <Grid item >
                <Typography className='pb-5' variant='6'> Legal </Typography>
                <div> 
                <button className='pb-5' variant='6'> Claim </button>
                </div>
                <div>
                <button className='pb-5' variant='6'> privacy </button>
                </div>
                <div>
                <button className='pb-5' variant='6'> Terms </button>
                </div>
               
            </Grid>

            {/* This is the last section of the footer */}
             <Grid className=' pt-20' item>

                <Typography variant='body2' component="p" align='center'>
                    &copy; 2023 My Company. All Right reserved.
                </Typography>
                <Typography variant='body2' component="p" align='center'>
                    Made With Love By Me
                </Typography>
                <Typography variant='body2' component="p" align='center'>
                    Icon Made By{ ' '}
                    <Link href='freepick.com' color='inherit' underline='always'>
                    FreePik
                    </Link>
                    <Link href='flaticon.com' color='inherit' underline='always'>
                    www.flaticon.com
                    </Link>
                </Typography>

             </Grid>


        </Grid>

        
    </div>
  )
}

export default Footer