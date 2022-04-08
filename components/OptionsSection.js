import React from 'react'
import StepHeader from './StepHeader'

const options = [
  {
    title: "Véhicule très sale (sable et terre sur les tapis/moquettes, poils d'animaux, boue carrosserie...)",
    time: '20min',
    price: "10.00"
  },
  {
    title: "Lavage et cire carrosserie",
    time: '22min',
    price: "10.00"
  },
  {
    title: "Vitres intérieures et extérieures",
    time: '11min',
    price: "7.00"
  },
  {
    title: "Contours et seuils de portes",
    time: '10min',
    price: "7.00"
  },
  {
    title: "Nettoyage des sièges en cuir",
    time: '5min',
    price: "8.00"
  },
  {
    title: "Toit ouvrant ou panoramique",
    time: '5min',
    price: "5.00"
  },
  {
    title: "Assainissement antibactérien",
    time: '5min',
    price: "10.00"
  },
  {
    title: "Soin des cuirs",
    time: '10min',
    price: "10.00"
  },
  {
    title: "Siège auto aspiration et plastiques (bébé)",
    time: '5min',
    price: "5.00"
  },
]

const OptionsSection = () => {
  return (
    <section className='mt-[50px]'>
      <div className="container">
        <StepHeader title={"OPTIONS"} subtitle={"AJOUTEZ DES SERVICES COMPLÉMENTAIRES."} currentStep={3} totalStep={5} />

        <div className="mt-[50px]">

          {
            options.map(({ title, time, price }, i) => (
              <div className='flex flex-wrap justify-center space-y-2.5 lg:space-y-0 lg:grid lg:grid-cols-[55%,15%,15%,15%] py-3 px-5 border border-t-0 first:border-t border-border-gray' key={i}>

                <div className="flex items-center w-full">
                  <p className="subtitle_sm text-dark text-center w-full lg:text-left">{title}
                  </p>
                </div>

                <div className="w-1/2 lg:w-full flex justify-end pr-2 lg:p-0 lg:justify-center items-center text-soft-dark">
                  <span className="cbs-meta-icon cbs-meta-icon-duration mr-1"></span>
                  <span className="subtitle_sm">{time}</span>
                </div>

                <div className="w-1/2 lg:w-full flex justify-start pl-2 lg:p-0 lg:justify-center items-center text-soft-dark">
                  <span className="cbs-meta-icon cbs-meta-icon-price mr-1"></span>
                  <span className="subtitle_sm">{price} €</span>
                </div>

                <div className='flex justify-end !mt-4 lg:!mt-0'>
                  <button className="_btn">Sélectionner</button>
                </div>

              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default OptionsSection