import React, { useState } from 'react'
import cx from '../utils/utils'
import CommandeEnCoursForm from './CommandeEnCoursForm';
import MyProfileForm from './MyProfileForm';

const btnStyles = 'py-[0.5em] px-[1em] subtitle_sm border md:border-b-0 border-border-gray text-primary hover:bg-primary hover:text-white hover:border-primary';

const btnActiveStyles = '!bg-primary !text-white !border-primary'


const Screens = [CommandeEnCoursForm, MyProfileForm]
const PendingOrderAndMyProfileFormSwitcher = () => {

  const [activeIndex, setActiveIndex] = useState(0)

  const ActiveScreen = Screens[activeIndex]

  return (
    <>
      <section className='mb-20'>
        <div className="container">
          <div className="flex gap-1 flex-wrap">
            <button onClick={() => setActiveIndex(0)} className={cx(btnStyles, activeIndex === 0 && btnActiveStyles)}>
              Commande en cours
            </button>
            <button onClick={() => setActiveIndex(1)} className={cx(btnStyles, activeIndex === 1 && btnActiveStyles)}>
              Votre profil
            </button>

            <button className={cx(btnStyles, 'md:ml-auto')}>
              Se déconnecter
            </button>
          </div>
          {<ActiveScreen />}
        </div>
      </section>
    </>
  )
}

export default PendingOrderAndMyProfileFormSwitcher