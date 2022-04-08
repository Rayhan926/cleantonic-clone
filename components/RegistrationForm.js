import React from 'react'
import Input from './Input'
import { FaRegUser, FaKey, FaAt } from 'react-icons/fa'

const RegistrationForm = () => {
  return (
    <>
      <form>
        <div className="space-y-[30px]">
          <Input icon={<FaAt size={13} />} type='text' placeholder="Email" />
          <div className="grid grid-cols-2 gap-5">
            <Input icon={<FaRegUser size={13} />} type='text' placeholder="Email" />
            <Input icon={<FaRegUser size={13} />} type='text' placeholder="Email" />
          </div>
          <Input icon={<FaKey size={13} />} type='text' placeholder="Email" />
          <Input icon={<FaKey size={13} />} type='text' placeholder="Email" />

          <label className='subtitle_sm text-dark flex items-center gap-2 cursor-pointer font-semibold text-sm' >
            <input type="checkbox" />
            J'accepte les<a href="#" className='hover:underline font-normal mx-[-2px]'>conditions d'utilisation</a>Clean Tonic.
          </label>

          <div>
            <button type="submit" className='_btn font-semibold w-full py-3'>CRÉER UN COMPTE</button>
          </div>


        </div>
      </form>
    </>
  )
}

export default RegistrationForm