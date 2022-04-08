import React from 'react'
import StepHeader from './StepHeader'

const CalenderSection = () => {
  return (
    <section className='mt-20' >
      <div className="container">
        <StepHeader
          title={"DATE ET HEURE DU RENDEZ-VOUS"}
          subtitle={"SÉLECTIONNEZ LE CRÉNEAU SOUHAITÉ DANS LE CALENDRIER."}
          currentStep={4}
          totalStep={5}
        />
      </div>
    </section>
  )
}

export default CalenderSection;

