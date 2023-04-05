import Farmaceutica from '../../Assets/Farmaceutica.png'
import Wave from '../../Assets/Vector 1.png'
import Wave2 from '../../Assets/Vector 2.png'

import React from 'react'

const Hero = () => {
  return (
    <div className='relative'>
        <img src={Wave2} alt='' className='w-full h-screen bottom-0 left-0 ml-[-15px] absolute' />
        <img src={Wave} alt='' className='w-full h-screen bottom-0 left-0 absolute' />
        <div className=' w-full h-screen items-center text-center flex justify-around text-white'>
            <img src={Farmaceutica} alt='' className=''/>
            <div className='z-0'>
                <h1 className='text-7xl'>BOTICA RODRIGUEZ</h1>
                <h3>Mas de 15 años vendiendo medicamentos a Comas</h3>
                <h4>Tu salud es lo mas importante ❤</h4>
            </div>
        </div>
    </div>
  )
}

export default Hero