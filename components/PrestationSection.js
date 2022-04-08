import React from 'react'
import StepHeader from './StepHeader'
import PrestationCard from './PrestationCard'

const cards = [
  {
    title: 'COCKTAIL SOFT [INTÉRIEUR]',
    price: 40,
    time: '75min',
    services: [
      "Aspiration complète (tapis, moquettes et sièges)",
      "Nettoyage plastiques intérieurs",
      "Pare-brise intérieur",
    ]
  },
  {
    title: 'COCKTAIL TONIC [INTER & EXTER]',
    price: 50,
    time: '112min',
    services: [
      "Aspiration complète (tapis, moquettes et sièges)",
      "Nettoyage plastiques intérieurs",
      "Pare-brise intérieur",
      "Lavage jantes",
      "Lavage et cire carrosserie",
      "Vitres extérieures",
      "Optiques de phares",
    ]
  },
  {
    title: 'COCKTAIL CHAMPAGNE [FULL]',
    price: 65,
    time: '146min',
    services: [
      "Aspiration complète (tapis, moquettes et sièges)",
      "Nettoyage plastiques intérieurs",
      "Pare-brise intérieur",
      "Lavage jantes",
      "Lavage et cire carrosserie",
      "Vitres intérieures et extérieures",
      "Optiques de phares",
      "Brillant pneus",
      "Contours et seuils de portes",
      "Nettoyage des sièges en cuir",
      "Parfum",
      "Toit ouvrant ou panoramique",
    ]
  },
]


const PrestationSection = () => {
  return (
    <section className='mt-[68px]'>
      <div className="container">
        <StepHeader title={"PRESTATION"} subtitle={"QUEL NETTOYAGE SOUHAITEZ-VOUS ?"} currentStep={2} totalStep={5} />

        <div className="mt-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
            {cards.map((card, i) => (
              <PrestationCard {...card} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrestationSection