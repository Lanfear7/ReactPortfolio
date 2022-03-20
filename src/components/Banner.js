import React, { useContext } from 'react'
import { animated, useSpring } from 'react-spring'
import { ScreenSizeContext } from '../helper/Context'
 
function Banner() {

    const {windowDimensions, setWindowDimensions} = useContext(ScreenSizeContext)

    const style1 = useSpring({
        from: {y: 30},
        to: { y:  -60},
        delay: 600
    })
    
    const style2 = useSpring({
        from: {y: 35},
        to: { y:  0},
        delay: 900
    })

    const style1Mobile = useSpring({
        from: {y: 200},
        to: { y:  -60},
        delay: 600
    })
  return (
      <>
      {
          windowDimensions.width > 525 ?
            <div className='Banner'>
                <div className='BannerContainer'>
                    <animated.h1 style={{...style1}}>Brennan Formanek</animated.h1>
                    <div className='Card'></div>
                    <animated.h2 style={{...style2}}>Full-Stack Web Developer</animated.h2>
                    <div className='Card'></div>
                </div>
            </div>
            :
            <div className='Banner'>
                <div className='BannerContainer'>
                    <animated.h1 style={{...style1Mobile}}>Brennan Formanek</animated.h1>
                    <div className='Card'></div>
                    <animated.h2 style={{...style2}}>Full-Stack Web Developer</animated.h2>
                    <div className='Card'></div>
                </div>
            </div>
      }
    
    </>
  )
}

export default Banner