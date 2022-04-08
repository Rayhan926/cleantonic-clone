import React from 'react'
import cx from '../utils/utils'

const Devider = ({ className = '' }) => {
    return (
        <div className={cx('w-[60px] h-0.5 bg-primary mx-auto', className)}></div>
    )
}

export default Devider