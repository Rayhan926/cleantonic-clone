import React, { useState } from 'react'
import cx from '../utils/utils'
import Checkbox from './Checkbox'

const CommandeEnCoursForm = () => {
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

        <label className='_wrapper_label border-b border-r'>
          <p className="subtitle_sm">Commune du lieu de rendez-vous (pour nous assurer que vous êtes bien dans notre périmètre)</p>
          <select className='_box_input focus:!bg-transparent' autocomplete="off">
            <option value="" selected="">Sélectionnez un emplacement</option>
            <option value="Rennes">Rennes</option>
            <option value="Saint-Grégoire">Saint-Grégoire</option>
            <option value="Cesson-Sévigné">Cesson-Sévigné</option>
            <option value="Chantepie">Chantepie</option>
            <option value="Saint-Jacques-de-la-Lande">Saint-Jacques-de-la-Lande</option>
            <option value="Vezin-le-Coquet">Vezin-le-Coquet</option>
          </select>
        </label>
      </section>

      {/* Apply Coupon --Start-- */}
      <div className="flex flex-col sm:flex-row items-center gap-3 my-[30px]">
        <button onClick={() => setIsOpneCouponForm(true)} type='button' className="subtitle_sm text-primary hover:underline">Ajouter un code promo</button>

        <div className={cx(isOpneCouponForm ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none', 'flex gap-3 items-center')}>
          <div>
            <input style={{ border: '1px solid #E4E4EC' }} type="text" className='_box_input w-auto inline px-3 py-1.5' />
          </div>
          <button type='button' className='_btn py-[7px] px-[22px]' >Appliquer</button>
        </div>

      </div>
      {/* Apply Coupon --End-- */}

      {/* Terms And COndition Checkboxs --Start-- */}
      <div className="flex flex-col gap-3">
        <label className='inline-flex gap-4 subtitle_sm cursor-pointer' >
          <Checkbox />
          Je confirme que ma voiture n'est pas "Très sale" ou que j'ai sélectionné cette option si c'est le cas.
        </label>
        <label className='inline-flex gap-4 subtitle_sm cursor-pointer' >
          <Checkbox />
          J'accepte les CGV Clean Tonic consultables sur la page Mentions Légales.
        </label>
      </div>
      {/* Terms And COndition Checkboxs --End-- */}

      <div className="flex flex-col items-center mt-10 gap-10">
        <p className="subtitle_sm text-center">Les prix mentionnés sont TTC et non soumis à TVA.</p>
        <div>
          <button type="submit" className='_btn'>Réserver et payer</button>
        </div>
      </div>

    </form>
  )
}

export default CommandeEnCoursForm