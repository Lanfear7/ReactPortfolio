import React, { useContext, useEffect, useState } from 'react'
import { useTransition, animated} from 'react-spring'
import { ScreenSizeContext } from '../helper/Context'

import ReactLogo from '../public/images/ReactLogo.png'
import JSLogo from '../public/images/JSlogo.png'
import ScssLogo from '../public/images/whiteScssLogo.png'
import NodeLogo from '../public/images/node.png'
import MySqlLogo from '../public/images/mysql.png'

function About() {

  const {windowDimensions, toggleAboutAnimation} = useContext(ScreenSizeContext)

  const JsDropDownAndBounce = useTransition(toggleAboutAnimation, {
    from: { y: 0, x: 100, rotate: 270, opacity: 0 },
    enter: [
      { y: windowDimensions.height * .7,      x: windowDimensions.width * .07 + 10,opacity: .1 },
      { y: windowDimensions.height * .53,     x: windowDimensions.width * .07 + 10,rotate: 325, config: { duration: "10"}},
      { y: windowDimensions.height * .53,     x: windowDimensions.width * .1 - 10, rotate: 335, config: { duration: "20"}},
      { y: windowDimensions.height * .53,     x: windowDimensions.width * .1 + 10, rotate: 345, config: { duration: "10"}, opacity: .2 },
      { y: windowDimensions.height * .53,     x: windowDimensions.width * .12,     rotate: 350, config: { duration: "10"}},
      { y: windowDimensions.height * .53 + 5, x: windowDimensions.width * .13,     rotate: 355, config: { duration: "10"}, opacity: .3},
      { y: windowDimensions.height * .53 + 15,x: windowDimensions.width * .15 -10, rotate: 360, config: { duration: "10"}},
      { y: windowDimensions.height * .56,     x: windowDimensions.width * .16,     rotate: 370, config: { duration: "10"}, opacity: .4},
      { y: windowDimensions.height * .56 + 7, x: windowDimensions.width * .17,     rotate: 375, config: { duration: "10"}},
      { y: windowDimensions.height * .56 + 18,x: windowDimensions.width * .18,     rotate: 380, config: { duration: "7"}, opacity: .5},
      { y: windowDimensions.height * .6,      x: windowDimensions.width * .18 + 10,rotate: 385, config: { duration: "7"}},
      { y: windowDimensions.height * .6 + 9,  x: windowDimensions.width * .19,     rotate: 390, config: { duration: "7"}},
      { y: windowDimensions.height * .6 + 39, x: windowDimensions.width * .2,      rotate: 395, config: { duration: "7"}},
      { y: windowDimensions.height * .6 + 59, x: windowDimensions.width * .2 + 10, rotate: 402, config: { duration: "7"}},
      { y: windowDimensions.height * .7 -20,  x: windowDimensions.width * .21,     rotate: 405, config: { duration: "7"}},
      { y: windowDimensions.height * .7,      x: windowDimensions.width * .21 + 5, rotate: 407, config: { duration: "7"}},
      { y: windowDimensions.height * .7,      x: windowDimensions.width * .21,     rotate: 400, config: { duration: "7"}},
      { y: windowDimensions.height * .7,      x: windowDimensions.width * .21 - 5, rotate: 395, config: { duration: "7"}}, 
      { y: windowDimensions.height * .7,      x: windowDimensions.width * .2 + 5,  rotate: 385, config: { duration: "7"}}, 
      { y: windowDimensions.height * .7,      x: windowDimensions.width * .2,      rotate: 380, config: { duration: "7"}},
      { y: windowDimensions.height * .7,      x: windowDimensions.width * .2 - 5,  rotate: 375, config: { duration: "7"}},
      { y: windowDimensions.height * .7,      x: windowDimensions.width * .19,     rotate: 370, config: { duration: "7"}},
      { y: windowDimensions.height * .7,      x: windowDimensions.width * .19 - 5, rotate: 365, config: { duration: "7"}},
      { y: windowDimensions.height * .7 + 5,  x: windowDimensions.width * .185,    rotate: 360, config: { duration: "7"}},
      
    ],
    leave: { opacity: 0, },
    config: { duration: "500"}               //***************This will provide a smooth transition ***************/
  })
  const JsDropDown = useTransition(toggleAboutAnimation, {
    from: { y: 0, x: 100, rotate: 0, opacity: 0 },
    enter: {y: windowDimensions.height * .7, opacity: .5},
    leave: { opacity: 0}
  })

  const ReactDropDown = useTransition(toggleAboutAnimation, {
    from: { y: 495, x: 350, rotate: 25, opacity: 0},
    enter:  [
      {y: windowDimensions.height * .7 - 5, x: 300, config: { duration: "100"}, opacity: .2},
      {y: windowDimensions.height * .7 - 5, x: 250, config: { duration: "60"}, rotate: 20, opacity: .4},
      {y: windowDimensions.height * .7, x: 240, config: { duration: "60"}, rotate: 15, opacity: .5},
      {y: windowDimensions.height * .7, x: 230, config: { duration: "50"}, rotate: 10,},
      {y: windowDimensions.height * .7, x: 220, config: { duration: "60"}, rotate: 5},
      {y: windowDimensions.height * .7 + 5, x: 210, config: { duration: "60"}, rotate: 0},
    ],
    leave: { opacity: 0, },
    config: { duration: "250" }               //***************This will provide a smooth transition ***************/
  })

  const ScssTransition = useTransition(toggleAboutAnimation, {
    from: { y: 480, x: -100, opacity: 0},
    enter:  [
      {y: windowDimensions.height * .7, x: -30, config: { duration: "30"}},
      {y: windowDimensions.height * .7, x: -10, config: { duration: "30"}},
      {y: windowDimensions.height * .7, x: windowDimensions.width * .01 -5, config: { duration: "30"} ,opacity: 0.5},
      {y: windowDimensions.height * .7, x: windowDimensions.width * .03 -10, config: { duration: "30"}},
      {y: windowDimensions.height * .7, x: windowDimensions.width * .04, config: { duration: "30"}},
      {y: windowDimensions.height * .7, x: windowDimensions.width * .04, config: { duration: "30"},opacity: 1},
    ],
    leave: { opacity: 0, },
    config: { duration: "350" }               //***************This will provide a smooth transition ***************/
  })

  const NodeTransition = useTransition(toggleAboutAnimation, {
    from: { y: 1000, x: -50, opacity: 0},
    enter:  [
      {y: 900, x: 10,  config: { duration: "60"}},
      {y: windowDimensions.height * .8,  x: windowDimensions.width * .07, config: { duration: "60"}},
      {y: windowDimensions.height * .75, x: windowDimensions.width * .07, config: { duration: "60"} ,opacity: 0.5},
      {y: windowDimensions.height * .7,  x: windowDimensions.width * .07, config: { duration: "50"}},
      {y: windowDimensions.height * .7,  x: windowDimensions.width * .07, config: { duration: "60"}},
      {y: windowDimensions.height * .7,  x: windowDimensions.width * .07, config: { duration: "60"},opacity: 1},
    ],
    leave: { opacity: 0, },
    config: { duration: "400" }               //***************This will provide a smooth transition ***************/
  })

  const MySqlTransition = useTransition(toggleAboutAnimation, {
    from: { y: windowDimensions.height * .7, opacity: 0, width: 0},
    enter: {x: 100, opacity: 1, width: 100},
    leave: { opacity: 0, },
    config: { duration: "250" }               //***************This will provide a smooth transition ***************/
  })


  //console.log(`Original, ${windowDimensions.height} For 450 should = ${windowDimensions.height * .53} For 480 should = ${windowDimensions.height * .56} For 500 should = ${windowDimensions.height * .6} For 600 should = ${windowDimensions.height * .7} For 700 should = ${windowDimensions.height * .75}`)
  return (
    <div className='AboutContainer'>
      
        <h1 id="About">About Me</h1>
        <div className='BackgroundAnimation'>
          { toggleAboutAnimation?
           <>
              {
                windowDimensions.width <= 465 ?
                <></>
                :
                ScssTransition((style, item) =>
                  item && <figure className='ReactAnimation'>
                    <animated.img src={ScssLogo} className="ScssLogo" style={style}></animated.img>
                  </figure>
                ) 
              }
              {
                windowDimensions.width <= 465 ?
                <></>
                :
                NodeTransition((style, item) =>
                  item && <figure className='ReactAnimation'>
                    <animated.img src={NodeLogo} className="NodeLogo" style={style}></animated.img>
                  </figure>
                )
              }
              {
                windowDimensions.width > 660 &&
                MySqlTransition((style, item) =>
                  item && <figure className='ReactAnimation'>
                            <animated.img src={MySqlLogo} className="SqlLogo" style={style}></animated.img>
                          </figure>
                )
              }
              {
                windowDimensions.width > 1375 ?
                JsDropDownAndBounce((style, item) =>
                  item && <figure className='ReactAnimation'>
                            <animated.img src={JSLogo} className="JsLogo" style={style}></animated.img>
                          </figure>
                )
                :
                <>
                {
                  windowDimensions.width > 885 &&
                  JsDropDown((style, item) =>
                  item && <figure className='ReactAnimation'>
                            <animated.img src={JSLogo} className="JsLogo" style={style}></animated.img>
                          </figure>
                ) 
                }
                </>
              }
              {
                windowDimensions.width > 1375 &&
                ReactDropDown((style, item) =>
                  item && <figure className='ReactAnimation'>
                            <animated.img src={ReactLogo} className="ReactLogo" style={style}></animated.img>
                          </figure>
                )
              }
            </>
            :
            <></>
          }
        </div>
        <div className='AboutText'>
          <div>
            <p>Crafting amazing web applications with Node/Express and React is my passion. I absolutely love pushing the boundaries of what's possible with UI design and UX features, and creating captivating animations that take the user experience to the next level is what sets my heart on fire.</p>

            <p>As a web developer, there's nothing quite like bringing a design to life and seeing it come to fruition in a way that is both enjoyable and interactive for the user. With Node/Express and React, the possibilities are endless, and I'm always eager to dive headfirst into a new project and explore what can be achieved.
            <br></br>
            <br></br>
At the end of the day, it's all about delivering an exceptional user experience, and that's what drives me to create web applications that truly make a difference.</p>
          </div>
        </div>
    </div>
  )
}

export default About