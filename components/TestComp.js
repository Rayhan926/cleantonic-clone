// import dynamic from 'next/dynamic'
// const Isotope = dynamic(() => import('isotope-layout'), {
//   ssr: false
// })
import Isotope from 'isotope-layout'
import React from 'react'

const IsotopeReact = () => {
  // init one ref to store the future isotope object
  const isotope = React.useRef()
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState('*')

  // initialize an Isotope object with configs
  React.useEffect(() => {
    isotope.current = new Isotope('.filter-container', {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows',
    })
    // cleanup
    return () => isotope.current && isotope.current.destroy()
  }, [])

  // handling filter key change
  React.useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` })
  }, [filterKey])

  const handleFilterKeyChange = key => () => setFilterKey(key)

  return (
    <>
      <ul>
        <li onClick={handleFilterKeyChange('*')}>Show Both</li>
        <li onClick={handleFilterKeyChange('vege')}>Show Veges</li>
        <li onClick={handleFilterKeyChange('fruit')}>Show Fruits</li>
        <li onClick={handleFilterKeyChange('saymon')}>Show saymon</li>
      </ul>
      <hr />
      <ul className="filter-container flex flex-wrap">
        <div className="w-[50%] bg-red-200 filter-item vege">
          <span>Cucumber</span>
        </div>
        <div className="w-[50%] bg-red-300 filter-item fruit">
          <span>Apple</span>
        </div>
        <div className="w-[50%] bg-red-400 filter-item fruit">
          <span>Orange</span>
        </div>
        <div className="w-[50%] bg-red-500 filter-item fruit vege">
          <span>Tomato</span>
        </div>
        <div className="w-[50%] bg-red-600 filter-item saymon">
          <span>saymon</span>
        </div>
        <div className="w-[50%] bg-green-200 filter-item fruit vege">
          <span>BBBB</span>
        </div>
        <div className="w-[50%] bg-green-300 filter-item saymon">
          <span>saymon 1</span>
        </div>
        <div className="w-[50%] bg-green-400 filter-item fruit saymon">
          <span>saymon 2</span>
        </div>
      </ul>
    </>
  )
}

export default IsotopeReact;