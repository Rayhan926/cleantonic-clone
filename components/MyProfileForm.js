import React, { useState } from 'react'
import cx from '../utils/utils'
import Checkbox from './Checkbox'

const MyProfileForm = () => {
  const [isOpneCouponForm, setIsOpneCouponForm] = useState(false)
  return (
    <form>
      <section className='border border-b-0 border-r-0 border-border-gray'>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <label className='_wrapper_label border-b border-r'>
            <p className="subtitle_sm">Prénom *</p>
            <input type="text" className='_box_input' />
          </label>

          <label className='_wrapper_label border-b border-r'>
            <p className="subtitle_sm">Nom *</p>
            <input type="text" className='_box_input' />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <label className='_wrapper_label border-b border-r'>
            <p className="subtitle_sm">Adresse du lavage *</p>
            <input type="text" className='_box_input' />
          </label>

          <label className='_wrapper_label border-b border-r'>
            <p className="subtitle_sm">Code postal *</p>
            <input type="text" className='_box_input' />
          </label>
        </div>

        <label className='_wrapper_label border-b border-r'>
          <p className="subtitle_sm">Ville *</p>
          <input type="text" className='_box_input' />
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <label className='_wrapper_label border-b border-r'>
            <p className="subtitle_sm">E-mail *</p>
            <input type="email" className='_box_input' />
          </label>

          <label className='_wrapper_label border-b border-r'>
            <p className="subtitle_sm">Numéro de téléphone *</p>
            <input type="text" className='_box_input' />
          </label>
        </div>

        <label className='_wrapper_label border-b border-r'>
          <p className="subtitle_sm">Marque et modèle du véhicule (éventuellement immatriculation) *</p>
          <input type="text" className='_box_input' />
        </label>
      </section>

      <div className="flex flex-col items-center mt-10">
        <div>
          <button type="submit" className='_btn'>Enregistrer</button>
        </div>
      </div>

    </form>
  )
}

export default MyProfileForm