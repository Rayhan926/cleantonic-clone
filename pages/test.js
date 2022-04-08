import React from 'react'
import dynamic from 'next/dynamic'
import Images from '../components/Images'
const IsotopeReact = dynamic(() => import('../components/TestComp'), {
  ssr: false
})
// import IsotopeReact from '../components/TestComp'

const Test = () => {
  return (
    <>
      <IsotopeReact />
      <Images />
    </>
  )
}

export default Test