import React, { useState } from 'react'
import LoginAndRegistrationModal from './LoginAndRegistrationModal';
import ReservationItem from './ReservationItem';
import StepHeader from './StepHeader'

const reservationItems = [
  {
    iconClass: 'cbs-meta-icon cbs-meta-icon-date text-soft-dark',
    title: '?',
    subtitle: 'Date de rendez-vous'
  },
  {
    iconClass: 'cbs-meta-icon cbs-meta-icon-time',
    title: '?',
    subtitle: 'Heure de rendez-vous'
  },
  {
    iconClass: 'cbs-meta-icon cbs-meta-icon-total-duration',
    title: <span>0 H <span className='ml-2' >0 MIN</span></span>,
    subtitle: 'Durée estimée'
  },
  {
    iconClass: 'cbs-meta-icon cbs-meta-icon-total-price',
    title: '0,00 €',
    subtitle: 'Prix total'
  },
]

const ReservationSection = () => {

  const [activeScreen, setActiveScreen] = useState(null)

  return (
    <section className='mt-20 pb-[120px]' >
      <div className="container">
        <StepHeader
          title={"RÉSUMÉ DE LA RÉSERVATION"}
          subtitle={"INDIQUEZ-NOUS VOS COORDONNÉES POUR LE LAVAGE."}
          currentStep={5}
          totalStep={5}
        />

        <div className="mt-[50px] grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {
            reservationItems.map((reservationItem, i) => (
              <ReservationItem {...reservationItem} key={i} />
            ))
          }
        </div>

        <div className='flex flex-wrap items-center justify-center mt-[30px] gap-3' >
          <button onClick={() => setActiveScreen(0)} className="_btn">S'identifier</button>
          <span className='text-dark'>ou</span>
          <button onClick={() => setActiveScreen(1)} className='_btn' >Créer un compte</button>

          <LoginAndRegistrationModal
            isOpen={activeScreen !== null}
            onClose={() => setActiveScreen(null)}
            defaultActiveScreen={activeScreen}
          />
        </div>
      </div>
    </section>
  )
}

export default ReservationSection;

