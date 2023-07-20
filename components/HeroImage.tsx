import React, { useRef } from 'react'
import ufo from '@/public/ufo-spaceship.jpeg'
import space from '@/public/space.jpg'
import landing from '@/public/landing.jpg'
import Image from 'next/image'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function HeroImage() {

  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
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
            backgroundImage: `url('/landing.jpg')`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <Image className=' items-center' src={ufo} alt='ufo' />
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2 className='flex justify-center text-white'>Take a trip to outer space</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2 className='flex justify-center text-white'>Crash land on the moon!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default HeroImage;