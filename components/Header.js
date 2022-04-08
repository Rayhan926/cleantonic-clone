import Link from 'next/link'
import React, { useState } from 'react'
import { FaCarSide, FaUserCircle, FaMedkit, FaEdit, FaQuestionCircle, FaWarehouse } from 'react-icons/fa'
import { BsChevronUp } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import cx from '../utils/utils'
const Header = () => {
  const [isOpenNav, setIsOpenNav] = useState(false)

  return (
    <header
      style={{
        background: "linear-gradient(to right, #0D0221, #00F2FF) !important"
      }}
      className='flex justify-between items-center px-[30px] h-[92px] relative'
    >

      <Link href={'#'}>
        <a>
          <img src="/img/logo_black.png" className='w-[185px]' alt="Cleantonic" />
        </a>
      </Link>

      <div>
        <button onClick={() => setIsOpenNav(true)} className='w-[46px] h-[46px] flex items-center justify-center border border-white text-white' >
          <FiMenu size={25} />
        </button>
      </div>


      {/* Dropdown Menu --Start-- */}
      <div
        style={{
          background: "linear-gradient(to right, #0D0221, #00F2FF) !important"
        }}
        className={cx("absolute top-0 left-0 z-[99999999] w-full h-auto duration-[400ms] ease-in-out", isOpenNav ? 'translate-y-0' : '-translate-y-full')}
      >
        <ul>
          <li className='p-[15px] flex justify-center items-center text-white cursor-pointer' onClick={() => setIsOpenNav(false)}>
            <BsChevronUp size={20} />
          </li>
          <li>
            <a href="#" className='w-full p-[15px] flex items-center gap-3 text-white text-[15px] leading-[28px] font-roboto-slab hover:nav_hover_shadow'>
              <FaCarSide size={19} />
              Réserver un lavage
            </a>
          </li>
          <li>
            <a href="#" className='w-full p-[15px] flex items-center gap-3 text-white text-[15px] leading-[28px] font-roboto-slab hover:nav_hover_shadow'>
              <FaUserCircle size={16} />
              Mon compte
            </a>
          </li>
          <li>
            <a href="#" className='w-full p-[15px] flex items-center gap-3 text-white text-[15px] leading-[28px] font-roboto-slab hover:nav_hover_shadow'>
              <FaMedkit size={17} />
              Aide
            </a>
          </li>
          <li>
            <a href="#" className='w-full p-[15px] flex items-center gap-3 text-white text-[15px] leading-[28px] font-roboto-slab hover:nav_hover_shadow'>
              <FaEdit size={17} />
              Nous écrire
            </a>
          </li>
          <li>
            <a href="#" className='w-full p-[15px] flex items-center gap-3 text-white text-[15px] leading-[28px] font-roboto-slab hover:nav_hover_shadow'>
              <FaQuestionCircle size={17} />
              Clean Tonic c’est quoi ?
            </a>
          </li>
          <li>
            <a href="#" className='w-full p-[15px] flex items-center gap-3 text-white text-[15px] leading-[28px] font-roboto-slab hover:nav_hover_shadow'>
              <FaWarehouse size={19} />
              Solutions pour les professionnels
            </a>
          </li>
        </ul>
      </div>
      {/* Dropdown Menu --End-- */}

    </header>
  )
}

export default Header