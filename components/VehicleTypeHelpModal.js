import React from 'react'
import Modal from 'react-modal'
import { modalStyles } from '../utils/utils'
import { IoMdClose } from 'react-icons/io'
const VehicleTypeHelpModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyles} preventScroll>
        <div className="w-[95vw] md:w-[80vw] mx-auto bg-white p-5 pb-7 md:px-10 md:py-8 md:pb-12">
          <div className="flex justify-between items-start sm:items-center gap-10">
            <h5 className="title_sm">Aide pour choisir votre type de véhicule</h5>
            <button onClick={onClose} className='w-11 h-11 flex items-center justify-center hover:bg-border-gray/50 duration-150 md:-mr-3'>
              <IoMdClose size={25} />
            </button>
          </div>

          <div className="px-3 md:px-6 mt-10">
            <ul className='list-[square] space-y-2'>
              <li className="subtitle_md text-dark">Citadine : Clio, C3, 208, A1, Polo, Ibiza, Fiat 500, Mini, Fiesta, Mito, DS3</li>
              <li className="subtitle_md text-dark">Compacte : Série 1, Mégane, Golf, Classe A, Ibiza, Focus, Giulietta, A3, 308, C4, Captur, 2008, DS4, Q2</li>
              <li className="subtitle_md text-dark">Berline, break, SUV : Q3, Kadjar, Série 3, DS5, Passat, X4, Evoque, Ateca, 508, 3008, A6, model S</li>
              <li className="subtitle_md text-dark">4×4, monospace, 7 places : X5, Q7, Scenic, Classe S, Touareg, GLE, S-max, 5008, Picasso, model X</li>
            </ul>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default VehicleTypeHelpModal