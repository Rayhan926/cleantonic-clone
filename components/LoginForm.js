import React from 'react'
import Input from './Input'
import { FaRegUser, FaKey } from 'react-icons/fa'
const LoginForm = ({ setForgotPasswordScreen }) => {
  return (
    <>
      <form>
        <div className='space-y-[30px]'>
          <Input icon={<FaRegUser size={13} />} type='text' placeholder="Username / Email" />
          <Input icon={<FaKey size={13} />} type='password' placeholder="Password" />

          <div className='flex justify-between items-center flex-wrap' >
            <label className='subtitle_sm text-dark flex items-center gap-2 cursor-pointer font-semibold text-sm' >
              <input type="checkbox" />
              Se souvenir de moi
            </label>

            <button type='button' onClick={() => setForgotPasswordScreen(2)} className="subtitle_sm hover:underline text-dark">Mot de passe oublié ?</button>
          </div>

          <div>
            <button type="submit" className='_btn font-semibold w-full py-3'>CONNEXION</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default LoginForm