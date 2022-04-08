import React from 'react'
import cx from '../utils/utils'

const ReservationItem = ({ iconClass, title, subtitle }) => {
  return (
    <div className='border border-border-gray p-[30px] flex justify-between'>
      <div className={cx("-mt-1 text-soft-dark", iconClass)}></div>
      <div className='text-right'>
        <p className='text-[24px] leading-[150%] text-primary' >{title}</p>
        <p className="subtitle_sm">{subtitle}</p>
      </div>
    </div>
  )
}

export default ReservationItem