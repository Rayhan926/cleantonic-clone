import React from 'react'
import Input from './Input'
import { FaRegUser } from 'react-icons/fa'

const ForgotPasswordForm = ({ onSetScreen }) => {
  return (
    <>
      <div>
        <p className="subtitle_sm text-sm text-dark !leading-[186%]">
          Vous avez oublié votre mot de passe ? Pas de souci, entrez ci-dessous votre adresse email. Vous allez ensuite recevoir par mail un lien de réinitialisation de votre mot de passe. Pensez aussi à vérifier dans vos spams si vous ne trouvez pas notre email.
        </p>

        <form className='space-y-[30px] mt-3'>
          <Input icon={<FaRegUser size={13} />} type='text' placeholder="Username / Email" />

          <div>
            <button type="submit" className='_btn font-semibold w-full py-3'>RÉINITIALISER MON MOT DE PASSE</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default ForgotPasswordForm