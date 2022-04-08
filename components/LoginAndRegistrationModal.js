import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { RiCloseCircleLine } from 'react-icons/ri'
import cx, { modalStyles } from '../utils/utils'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import ForgotPasswordForm from './ForgotPasswordForm'

const btnStyle = 'w-full block py-3.5 px-5'

const LoginAndRegistrationModal = ({ defaultActiveScreen = 0, isOpen, onClose }) => {

  const [activeIndex, setActiveIndex] = useState(defaultActiveScreen)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    setActiveIndex(defaultActiveScreen)
  }, [defaultActiveScreen])


  const Screens = [<LoginForm setForgotPasswordScreen={setActiveIndex} />, <RegistrationForm />, <ForgotPasswordForm />]
  const activeScreen = Screens[activeIndex]

  const closeAfterAnimate = () => {
    setIsClosing(true)
    onClose()

    setTimeout(() => {
      setIsClosing(false)
    }, 300);
  }

  return (
    <>
      <Modal closeTimeoutMS={250} isOpen={isOpen} style={modalStyles} onRequestClose={closeAfterAnimate} preventScroll={true}>
        <div className={
          cx("h-[90vh] max-h-[600px] w-[90vw] max-w-[800px] mx-auto bg-white grid grid-cols-1 md:grid-cols-[40%,auto] relative",
            isClosing ? 'animation_scale_reverse' : 'animation_scale'
          )
        }>

          {/* Close Button --Start-- */}
          <button onClick={closeAfterAnimate} className="w-[31px] h-[31px] flex items-center justify-center rounded-full absolute top-[-12px] right-[-12px] bg-white text-dark hover:text-red-600">
            <RiCloseCircleLine size={25} />
          </button>
          {/* Close Button --End-- */}

          <div className='hidden md:block'>
            <img src="/img/presentation_01.jpg" alt="presentation_01" className='w-full h-full object-cover' />
          </div>

          <div className="py-10">

            <div className="w-[80%] md:w-[380px] mx-auto space-y-[30px]">
              <div className='w-full grid grid-cols-2' >
                <button
                  className={cx(btnStyle, activeIndex === 0 ? 'bg-primary text-white' : 'bg-border-gray text-dark')}
                  onClick={() => setActiveIndex(0)}
                >
                  S'identifier
                </button>

                <button
                  className={cx(btnStyle, activeIndex === 1 ? 'bg-primary text-white' : 'bg-border-gray text-dark')}
                  onClick={() => setActiveIndex(1)}
                >
                  Créer un compte
                </button>
              </div>

              <div className="px-1">
                {activeScreen}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default LoginAndRegistrationModal