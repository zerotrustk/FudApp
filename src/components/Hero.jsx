import React from 'react'
import hero_img from '../assets/hero/hero.jpg'
import hero_img2 from '../assets/hero/hero2.jpg'
import hero_img3 from '../assets/hero/hero3.jpg'  

const Hero = () => {
  return (
    <div className='hero h-screen flex flex-col items-center'>
      <div className='flex justify-between items-center gap-4 w-full max-w-screen mt-16'> 
        <div className='flex'>
          <img src={hero_img} alt="" className='w-[630px] h-[580px] object-cover -ml-12 mt-8 rounded-[50%] border-8 border-white'/>
          <img src={hero_img2} alt="" className='w-[430px] h-[430px] object-cover -ml-8 mt-46 rounded-[50%] border-8 border-white'/>
          <img src={hero_img3} alt="" className='w-[320px] h-[320px] object-cover -ml-6 mt-78 rounded-[50%] border-8 border-white'/>
        </div>

        <div className='max-w-1/2 mt-12'>
          <h1 className='text-6xl font-bold text-white -mt-80 leading-tight'>Delicious Meal</h1>
          <p className='text-medium font-bold mt-4 text-white'>“Dine like royalty.” · “Bringing flavor to your evenings.” “Dinner served with a side of magic.”</p>
        </div>
      </div>
    </div>
  )
}

export default Hero