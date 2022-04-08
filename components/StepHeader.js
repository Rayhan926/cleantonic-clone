import React from 'react'
import StepCircle from './StepCircle'

const StepHeader = ({ currentStep, totalStep, title, subtitle }) => {
    return (
        <div className='flex gap-6'>
            <StepCircle currentStep={currentStep} totalStep={totalStep} />
            <div className='pr-2 sm:pr-0'>
                <h3 className="title_sm">{title}</h3>
                <p className="subtitle_md mt-0.5">{subtitle}</p>
            </div>
        </div>
    )
}

export default StepHeader;