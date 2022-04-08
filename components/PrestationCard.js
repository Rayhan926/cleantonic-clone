import React from 'react'

const PrestationCard = ({ title, price, time, services }) => {
  return (
    <div className='border border-border-gray py-[25px] px-[20px] text-center flex flex-col'>
      <h4 className="subtitle_md text-[18px] leading-[30px] text-dark font-bold tracking-[2px] mb-5">{title}</h4>

      <div className='flex items-start text-primary text-[24px] justify-center mb-[30px]'>
        <span className='text-[64px] font-light'>{price}</span>
        <span>00</span>
        <span className='ml-1'>€</span>
      </div>

      <div className="flex justify-center items-center py-[15px] border-y border-border-gray text-soft-dark mb-[30px]">
        <span className="cbs-meta-icon cbs-meta-icon-duration mr-1"></span>
        <span className="subtitle_sm">{time}</span>
      </div>

      <ul className='subtitle_sm  space-y-[5px]' >
        {
          services.map((service, i) => (
            <li key={i}>{service}</li>
          ))
        }
      </ul>

      <div className="mt-auto pt-[30px]">
        <button className="_btn">Sélectionner</button>
      </div>
    </div>
  )
}

export default PrestationCard;