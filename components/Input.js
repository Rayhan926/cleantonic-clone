import React from 'react'
import cx from '../utils/utils';

const Input = React.forwardRef(({ className = '', icon, ...props }, ref) => {
  return (
    <label className='flex items-center h-[50px] py-0.5 pr-0.5 bg-border-gray overflow-hidden rounded'>
      <div className='w-10 h-full flex items-center justify-center shrink-0 text-soft-dark'>
        {icon}
      </div>
      <input ref={ref} type="text" className={cx(className, 'w-full h-full text-sm border-none outline-none py-1.5 px-3 text-soft-dark focus:bg-[#fbfafc]')} {...props} />
    </label>
  )
})

Input.displayName = 'Input'
export default Input