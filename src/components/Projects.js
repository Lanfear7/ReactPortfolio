import React, { useContext, useState } from 'react'
import { ScreenSizeContext } from '../helper/Context'
import { useSpring, animated, useTransition } from 'react-spring'

import Project1001 from '../public/images/project1-001.png'
import Project1002 from '../public/images/project1-002.png'
import Project1003 from '../public/images/project1-003.png'
import Project1004 from '../public/images/project1-004.png'


import ReactLogo from '../public/images/ReactLogo.png'
import Express from '../public/images/express.png'
import Lambda from '../public/images/lambdaLogo.png'
import AWS from '../public/images/aws.png'
import DynamoDB from '../public/images/dynamoDB.png'



function Projects() {

  const {windowDimensions, scrollTop} = useContext(ScreenSizeContext)


  const styles1 = useSpring({
    loop: true,
    from: { y: 700 },
    to: { y: -350 },
    config: {duration: "20000"}
  })

  const styles2 = useSpring({
    loop: true,
    from: { y: 400, x: windowDimensions.width * .2 },
    to: { y: -650, x: windowDimensions.width * .2 },
    config: {duration: "12000"},
    delay: 1000
  })

  const styles3 = useSpring({
    loop: true,
    from: { y: 100, x: windowDimensions.width * .1 },
    to: { y: -950, x: windowDimensions.width * .1 },
    config: {duration: "15000"},
    delay: 7000

  })

  const styles4 = useSpring({
    loop: true,
    from: { y: -200, x: windowDimensions.width * .23 },
    to: { y: -1250, x: windowDimensions.width * .23 },
    config: {duration: "20000"},
    delay: 9000
  })

  console.log(windowDimensions.width)
  return (
    <div id="Projects" className='ProjectsContainer'>

      <h1>Projects</h1>

      <div className='Project'>
        <div className='ProjectContents'>
          <div className='MainContent'>
            <h1>RuneDen</h1>
            <p>RuneDen is a hub for gamers to get texture packs or seeds for their Minecraft worlds! I bild this app using React,Node/Express, and MySQL. You are able to create a account and login inorder to get varified and post texture packs. You can download any texture pack avalibe without an account though.</p>
            <div className='Links'>
              <a>Live Link</a>
            </div>
          </div>
          <div className='TeachStackLogos'>
            <figure>
              <img src={ReactLogo}></img>
            </figure>
            <figure>
              <img src={AWS}></img>
            </figure>
            <figure>
              <img src={Lambda}></img>
            </figure>
            <figure className='dynamo'>
              <img src={DynamoDB}></img>
            </figure>
          </div>
        </div>
        <div className='AnimationContainer'>
          <animated.figure style={styles1} className="pic2" onClick={()=>{console.log('clicked')}}>
            <img src={Project1003}></img>
          </animated.figure>
          <animated.figure style={styles2} className="pic1">
            <img src={Project1001}></img>
          </animated.figure>
          <animated.figure style={styles3} className="pic2">
            <img src={Project1002}></img>
          </animated.figure>
          <animated.figure style={styles4} className="pic2">
            <img src={Project1004}></img>
          </animated.figure>
        </div>
      </div>
      {
        windowDimensions.width >= 700 ?
        <div className='Project'>
        <div className='AnimationContainer'>
          <animated.figure style={styles1} className="pic2" onClick={()=>{console.log('clicked')}}>
            <img src={Project1003}></img>
          </animated.figure>
          <animated.figure style={styles2} className="pic1">
            <img src={Project1001}></img>
          </animated.figure>
          <animated.figure style={styles3} className="pic2">
            <img src={Project1002}></img>
          </animated.figure>
          <animated.figure style={styles4} className="pic2">
            <img src={Project1004}></img>
          </animated.figure>
        </div>
        <div className='ProjectContents'>
          <div className='MainContent'>
            <h1>Project 2</h1>
            <p>RuneDen is a hub for gamers to get texture packs or seeds for their Minecraft worlds! I bild this app using React,Node/Express, and MySQL. You are able to create a account and login inorder to get varified and post texture packs. You can download any texture pack avalibe without an account though.</p>
            <div className='Links'>
              <a>Live Link</a>
            </div>
          </div>
          <div className='TeachStackLogos'>
            <figure>
              <img src={ReactLogo}></img>
            </figure>
            <figure>
              <img src={AWS}></img>
            </figure>
            <figure>
              <img src={Lambda}></img>
            </figure>
            <figure className='dynamo'>
              <img src={DynamoDB}></img>
            </figure>
          </div>
        </div>
      </div>
       :
       <div className='Project'>
        <div className='ProjectContents'>
          <div className='MainContent'>
            <h1>Project 2</h1>
            <p>RuneDen is a hub for gamers to get texture packs or seeds for their Minecraft worlds! I bild this app using React,Node/Express, and MySQL. You are able to create a account and login inorder to get varified and post texture packs. You can download any texture pack avalibe without an account though.</p>
            <div className='Links'>
              <a>Live Link</a>
            </div>
          </div>
          <div className='TeachStackLogos'>
            <figure>
              <img src={ReactLogo}></img>
            </figure>
            <figure>
              <img src={AWS}></img>
            </figure>
            <figure>
              <img src={Lambda}></img>
            </figure>
            <figure className='dynamo'>
              <img src={DynamoDB}></img>
            </figure>
          </div>
        </div>
        <div className='AnimationContainer'>
          <animated.figure style={styles1} className="pic2" onClick={()=>{console.log('clicked')}}>
            <img src={Project1003}></img>
          </animated.figure>
          <animated.figure style={styles2} className="pic1">
            <img src={Project1001}></img>
          </animated.figure>
          <animated.figure style={styles3} className="pic2">
            <img src={Project1002}></img>
          </animated.figure>
          <animated.figure style={styles4} className="pic2">
            <img src={Project1004}></img>
          </animated.figure>
        </div>
      </div>
      }
      <div className='Project'>
        <div className='ProjectContents'>
          <div className='MainContent MainContentWhite'>
            <h1>Project 3</h1>
            <p>RuneDen is a hub for gamers to get texture packs or seeds for their Minecraft worlds! I bild this app using React,Node/Express, and MySQL. You are able to create a account and login inorder to get varified and post texture packs. You can download any texture pack avalibe without an account though.</p>
            <div className='Links'>
              <a>Live Link</a>
            </div>
          </div>
          <div className='TeachStackLogos TeachStackLogosWhite'>
            <figure>
              <img src={ReactLogo} className="React" ></img>
            </figure>
            <figure>
              <img src={AWS} className="AWS"></img>
            </figure>
            <figure>
              <img src={Lambda}></img>
            </figure>
            <figure className='dynamo'>
              <img src={DynamoDB}></img>
            </figure>
          </div>
        </div>
        <div className='AnimationContainer'>
          <animated.figure style={styles1} className="pic2" onClick={()=>{console.log('clicked')}}>
            <img src={Project1003}></img>
          </animated.figure>
          <animated.figure style={styles2} className="pic1">
            <img src={Project1001}></img>
          </animated.figure>
          <animated.figure style={styles3} className="pic2">
            <img src={Project1002}></img>
          </animated.figure>
          <animated.figure style={styles4} className="pic2">
            <img src={Project1004}></img>
          </animated.figure>
        </div>
      </div>

    </div>
  )
}

export default Projects