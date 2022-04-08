import React from 'react'
import Devider from './Devider'
import { FaFacebookF, FaLinkedinIn, FaHeart } from 'react-icons/fa'
import { TiSocialInstagram } from 'react-icons/ti'
import { IoLogoYoutube } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      {/* Footer Top --Start-- */}
      <div className="pt-[60px] bg-[#FBFAFC]">
        <div className="container border-b border-primary">
          <div className="text-center">
            <h3 className="title_md">Le Clean Tonic Club</h3>
            <Devider className='my-[25px]' />
            <p className="subtitle_md mb-[100px]">ON VOUS ENVERRA NOS ACTUS, PEUT-ÊTRE DES PROMOTIONS, MAIS PROMIS ON NE SERA PAS TROP INTRUSIFS 😉</p>

            <a href="#" className='text-primary text-lg !leading-[30px] tracking-[2px] hover:underline font-bold inline-block mb-[90px]'>LIRE NOTRE BLOG</a>
          </div>
        </div>
      </div>
      {/* Footer Top --End-- */}

      {/* Footer Top --Start-- */}
      <div className="py-[70px] bg-dark">
        <ul className='flex text-[#A8B1B6] justify-center mb-[50px] gap-8'>
          <li>
            <a href="#" className='hover:text-white duration-200'>
              <FaFacebookF size={18} />
            </a>
          </li>
          <li>
            <a href="#" className='hover:text-white duration-200'>
              <TiSocialInstagram size={20} />
            </a>
          </li>
          <li>
            <a href="#" className='hover:text-white duration-200'>
              <IoLogoYoutube size={20} />
            </a>
          </li>
          <li>
            <a href="#" className='hover:text-white duration-200'>
              <FaLinkedinIn size={20} />
            </a>
          </li>
        </ul>

        <div className='flex flex-col items-center container'>
          <p className="subtitle_md text-[#797980] text-center ">By <a href="#" className='hover:underline mx-1'>Clean Tonic</a>
            ©2021 I Made with <span><FaHeart className='inline' /></span> in Rennes City</p>

          <a href="#" className='text-[#797980] hover:underline'>Mentions légales</a>
        </div>
      </div>
      {/* Footer Top --End-- */}
    </footer>
  )
}

export default Footer