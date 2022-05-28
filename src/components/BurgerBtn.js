import React, {useContext} from 'react'
import { ScreenSizeContext } from '../helper/Context'                                   //importing global state
import Burger from '../public/images/menu.png'
import { useTransition, animated } from 'react-spring'


function BurgerBtn() {
 
    const {windowDimensions, toggle, setToggle, scrollTop} = useContext(ScreenSizeContext)         //using global state


  const popOutTransition = useTransition(toggle,{
    from: {x: 1950, opacity: 0},
    enter: {x: windowDimensions.width / 2 - 10, opacity: 1},
    leave: {x: 1950},
  })

  const popOutTransitionMobile = useTransition(toggle,{
    from: {x: 700, opacity: 0},
    enter: {x: -windowDimensions.width / 5 - 6, opacity: 1},
    leave: {x: 700},
  })


  const item1 = useTransition(toggle,{
    from: { opacity: 0 },
    enter: { opacity: 1, delay: 400},
    leave: { opacity: 0 },
    
  })

  const item2 = useTransition(toggle,{
    from: { opacity: 0 },
    enter: { opacity: 1 ,delay: 800},
    leave: { opacity: 0 },
    
  })

  const item3 = useTransition(toggle,{
    from: { opacity: 0 },
    enter: { opacity: 1, delay: 1200},
    leave: { opacity: 0 },
    
  })


  return (
    <>
      {windowDimensions.width > 850 ? popOutTransition((style, item) => 
        item?
        <animated.div className='NavBar' style={style}>
          <div className='Content'>
            <p onClick={()=>setToggle(!toggle)}>X</p>
            {item1((style, item) =>
              item && <a href='#About' onClick={()=>setToggle(false)}><animated.h1 style={style}>About</animated.h1></a>
            )}
            {item2((style, item) =>
              item && <a href='#Projects' onClick={()=>setToggle(false)}><animated.h1 style={style}>Projects</animated.h1></a>
            )}
            {item3((style, item) =>
              item && <a href='#ContactMe' onClick={()=>setToggle(false)}><animated.h1 style={style}>Contact</animated.h1></a>
            )}
          </div>  
        </animated.div>
        :
        <></>)
      : 
      popOutTransitionMobile((style, item) => 
        item?
        <animated.div className='NavBar' style={style}>
          <div className='Content'>
            <p onClick={()=>setToggle(!toggle)}>X</p>
            {item1((style, item) =>
              item && <a href='#About' onClick={()=>setToggle(false)}><animated.h1 style={style}>About</animated.h1></a>
            )}
            {item2((style, item) =>
              item && <a href='#Projects' onClick={()=>setToggle(false)}><animated.h1 style={style}>Projects</animated.h1></a>
            )}
            {item3((style, item) =>
              item && <a href='#ContactMe' onClick={()=>setToggle(false)}><animated.h1 style={style}>Contact</animated.h1></a>
            )}
          </div>  
        </animated.div>
        :
        <></>)}
      
      {
        toggle?
        
        <div className='SideNav'>
          <div className='BurgerBtn'>
          </div>
        </div> 
        :
        <div className='SideNav'>
          {
            scrollTop <= 3800 ? 
              <div className='BurgerBtn'>
                <figure onClick={()=>setToggle(!toggle)}>
                  <img src={Burger}></img>
                </figure>
              </div>
            :
            <div className='BurgerBtn'>
            <figure onClick={()=>setToggle(!toggle)}>
              <img src={Burger} className='BlackBtn'></img>
            </figure>
          </div>
          }
        </div>
      }
      
    </>
  )
}

export default BurgerBtn