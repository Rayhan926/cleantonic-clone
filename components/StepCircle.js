import React from 'react'

const StepCircle = ({ currentStep, totalStep }) => {
    return (
        <div
            className='w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] bg-primary text-white flex items-center justify-center rounded-full shrink-0'
        >
            <div className='!leading-[0]'>
                <span className='text-[28px]' >{currentStep}</span>
                <span className='text-[18px]'>/{totalStep}</span>
            </div>
        </div>
    )
}

export default StepCircle