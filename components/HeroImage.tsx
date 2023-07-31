import React, { useRef } from 'react'
import ufo from '@/public/ufo-spaceship.jpeg'
import space from '@/public/space-palm.jpg'
import landing from '@/public/landing.jpg'
import Image from 'next/image'
import rocketShip from '@/public/rocket-ship-cropped.png'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function HeroImage() {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
     <div
      style={{
        backgroundImage: `url('/space.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Set the height of the parallax container
      }}
    >
      <Parallax pages={2} >
        {/* <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={2}
          style={{
            backgroundImage: `url('/space.jpg')`,
            backgroundSize: 'cover',
          }} 
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url('/space-2.jpg')`,
            backgroundSize: 'cover',
          }}
        /> */}

        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          style={{  ...alignCenter, justifyContent: 'flex-start'}}
        >
          <h2 className='ml-15 text-white'>Take a trip to outer space</h2>
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={1.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: 'flex-end' }}
        >
          <Image className='mr-15' src={rocketShip} alt='rocket-ship'  width={300} height={200}/>
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={3}
          speed={2}
        >
          <h2 className='flex justify-center text-white'>Crash land on the moon!</h2>
        </ParallaxLayer> */}
      </Parallax>
    </div>
  )
}

export default HeroImage;