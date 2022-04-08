import Carousel, { Modal, ModalGateway } from 'react-images';
import React, { useState } from 'react'
const images = [{ src: '/img/1.png' }, { src: '/img/2.png' }, { src: '/img/3.png' }, { src: '/img/4.png' }];

const Images = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>Open</button>
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={() => setModalIsOpen(false)}>
            <Carousel views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
}

export default Images