import React from 'react'
import cx from '../utils/utils'

const VehicleTypeCard = ({ isSelected, onSelect, data }) => {
  return (
    <div className={cx('h-[147px] flex flex-col justify-center items-center border  hover:bg-primary hover:border-primary  hover:text-white cursor-pointer duration-100',
      isSelected ? 'bg-primary border-primary text-white' : 'border-border-gray text-soft-dark')}
      onClick={() => onSelect(data)}
    >
      <div className={cx("cbs-vehicle-icon", data.iconClass)}></div>
      <h6>{data.title}</h6>
    </div>
  )
}

export default VehicleTypeCard