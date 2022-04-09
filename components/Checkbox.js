import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Checkbox = React.forwardRef((props, ref) => {
  return (
    <label>
      <input type="checkbox" {...props} ref={ref} className="_checkbox" />
      <div className="_checkbox_wrapper">
        <div className="_checkbox_inner">
          <FaCheck size={17} />
        </div>
      </div>
    </label>
  )
})

export default Checkbox