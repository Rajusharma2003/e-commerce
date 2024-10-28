/* eslint-disable no-unused-vars */
import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]

// order Traking is improted in orderDetails.
const OrderTracking = ({activeStep}) => {
  return (

    <div className='w-full'>

        {/* This is the stepper from mui material */}
      <Stepper activeStep={activeStep} alternativeLable>
            {steps.map((label) => <Step>
                <StepLabel sx={{color:"#9155FD" ,fontSize:"44px"}}>{label}</StepLabel>
            </Step>)}
      </Stepper>
    </div>
  )
}

export default OrderTracking
