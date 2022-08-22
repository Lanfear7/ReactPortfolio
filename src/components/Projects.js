import React, { useContext, useState } from 'react'
import { ScreenSizeContext, ProjectPopUP } from '../helper/Context'
import { useSpring, animated, useTransition } from 'react-spring'

import Project1001 from '../public/images/project1-001.png'
import Project1002 from '../public/images/project1-002.png'
import Project1003 from '../public/images/project1-003.png'
import Project1004 from '../public/images/project1-004.png'

import Project2001 from '../public/images/project2-001.png'
import Project2002 from '../public/images/project2-002.png'
import Project2003 from '../public/images/project2-003.png'
import Project2004 from '../public/images/project2-004.png'

import Project3001 from '../public/images/project3-001.png'
import Project3002 from '../public/images/project3-002.png'
import Project3003 from '../public/images/project3-003.png'
import Project3004 from '../public/images/project3-004.png'


import ReactLogo from '../public/images/ReactLogo.png'
import JSlogo from '../public/images/JSlogo.png'
import MySql from '../public/images/mysql.png'
import Node from '../public/images/node.png'
import Express from '../public/images/express.png'
import Spring from '../public/images/spring.png'
import EmailJs from '../public/images/emailjs.png'
import HTML from '../public/images/html.png'
import CSS from '../public/images/css.png'



function Projects() {

  const {windowDimensions, scrollTop} = useContext(ScreenSizeContext)
  const {setProjectPopUp, setPopUpImg } = useContext(ProjectPopUP)


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

  const [popUp, setPopUp] = useState (false)
  const [img, setImg] = useState()

  // on img click set popup to true ans set the e.taget.src to img *DONE* 
  // then in the conditional call the imgPopUp function *DONE* 
  // have popup contaier sticky and take up 100% width + height 


  function ImgPopUpSetUp(e){
    setProjectPopUp(true)
    setPopUpImg(e.target.src)
  }

  function ImgCardPopUp(){
    return <div className='popUpBackGround'>
      <div className='popUpContainer'>
        <figure>
          <img src={img}></img>
        </figure>
      </div>
    </div>
  }
  

  return (
    <>
      <div id="Projects" className='ProjectsContainer'>
        <h1 className='Heading'>Projects</h1>
        <div className='Project'>
          <div className='ProjectContents'>
            <div className='MainContent'>
              <h1>RuneDen</h1>
              <p>RuneDen is a hub for gamers to get all their latest and greatest game content! 
                I built this app using React, Node/Express, and MySQL. 
                Users can create an account to get verified and post things like
                texture packs and game modifications.</p>
              <div className='Links'>
                
              </div>
            </div>
            <div className='TeachStackLogos Light'>
              <figure>
                <img src={ReactLogo}></img>
              </figure>
              <figure>
                <img src={Node}></img>
              </figure>
              <figure>
                <img src={Express}></img>
              </figure>
              <figure>
                <img src={MySql}></img>
              </figure>
            </div>
          </div>
          <div className='AnimationContainer'>
            <animated.figure style={styles1} className="pic2" onClick={(e)=>{ImgPopUpSetUp(e)}}>
              <img src={Project1003}></img>
            </animated.figure>
            <animated.figure style={styles2} className="pic1" onClick={(e)=>{ImgPopUpSetUp(e)}}>
              <img src={Project1001}></img>
            </animated.figure>
            <animated.figure style={styles3} className="pic2" onClick={(e)=>{ImgPopUpSetUp(e)}}>
              <img src={Project1002}></img>
            </animated.figure>
            <animated.figure style={styles4} className="pic2" onClick={(e)=>{ImgPopUpSetUp(e)}}>
              <img src={Project1004}></img>
            </animated.figure>
          </div>
        </div>
        {
          //only for project 2 on width less then 700 it will format the html in a nice way for the user to see it
          windowDimensions.width >= 700 ?
          <div className='Project'>
          <div className='AnimationContainer'>
            <animated.figure style={styles1} className="pic2" onClick={(e)=>{ImgPopUpSetUp(e)}}>
              <img src={Project2003}></img>
            </animated.figure>
            <animated.figure style={styles2} className="pic1" onClick={(e)=>{ImgPopUpSetUp(e)}}>
              <img src={Project2001}></img>
            </animated.figure>
            <animated.figure style={styles3} className="pic2" onClick={(e)=>{ImgPopUpSetUp(e)}}>
              <img src={Project2002}></img>
            </animated.figure>
            <animated.figure style={styles4} className="pic2" onClick={(e)=>{ImgPopUpSetUp(e)}}>
              <img src={Project2004}></img>
            </animated.figure>
          </div>
          <div className='ProjectContents'>
            <div className='MainContent'>
              <h1>Portfolio</h1>
              <p>My portfolio was all built from scratch using React, along 
                with a few libraries such as EmailJS and 
                React Spring for the animations. For some of the animations, I held the key values 
                I needed in global state, using Context and wrapping the app within a 
                provider to share those values across the whole app.</p>
              <div className='Links'>
              </div>
            </div>
            <div className='TeachStackLogos Light'>
              <figure>
                <img src={ReactLogo}></img>
              </figure>
              <figure>
                <img src={Spring}></img>
              </figure>
              <figure>
                <img src={EmailJs}></img>
              </figure>
            </div>
          </div>
        </div>
         :
         <div className='Project'>
          <div className='ProjectContents'>
            <div className='MainContent'>
              <h1>Portfolio</h1>
              <p>My portfolio was all built from scratch using React, along 
                with a few libraries such as EmailJS and 
                React Spring for the animations. For some of the animations, I held the key values 
                I needed in global state, using Context and wrapping the app within a 
                provider to share those values across the whole app.</p>              
                <div className='Links'>
              </div>
            </div>
            <div className='TeachStackLogos Light'>
              <figure>
                <img src={ReactLogo}></img>
              </figure>
              <figure>
                <img src={Spring}></img>
              </figure>
              <figure>
                <img src={EmailJs}></img>
              </figure>
            </div>
          </div>
          <div className='AnimationContainer'>
            <animated.figure style={styles1} className="pic2" onClick={(e)=>{ImgPopUpSetUp(e)}}>
              <img src={Project2003}></img>
            </animated.figure>
            <animated.figure style={styles2} className="pic1" onClick={(e)=>{ImgPopUpSetUp(e)}}>
              <img src={Project2001}></img>
            </animated.figure>
            <animated.figure style={styles3} className="pic2" onClick={(e)=>{ImgPopUpSetUp(e)}}>
              <img src={Project2002}></img>
            </animated.figure>
            <animated.figure style={styles4} className="pic2" onClick={(e)=>{ImgPopUpSetUp(e)}}>
              <img src={Project2004}></img>
            </animated.figure>
          </div>
        </div>
        }
        <div className='Project'>
          <div className='ProjectContents'>
            <div className='MainContent MainContentWhite'>
              <h1>Forever Hungry</h1>
              <p>Forever Hungry is a recipe app where you can find and search for the pefect recipe for tonights dinner. 
                This app was built using HTML/CSS and vanilla JavaScript. All recipes come from the Spoonacular API,
                displaying those tasty treats in a user friendly way.</p>
              <div className='Links'>
              </div>
            </div>
            <div className='TeachStackLogos'>
              <figure className='dynamo'>
                <img src={HTML}></img>
              </figure>
              <figure className='dynamo'>
                <img src={CSS}></img>
              </figure>
              <figure className='dynamo'>
                <img src={JSlogo}></img>
              </figure>
            </div>
          </div>
          <div className='AnimationContainer'>
            <animated.figure style={styles1} className="pic2" onClick={(e)=>{ImgPopUpSetUp(e)}}>
              <img src={Project3003}></img>
            </animated.figure>
            <animated.figure style={styles2} className="pic1" onClick={(e)=>{ImgPopUpSetUp(e)}}>
              <img src={Project3001}></img>
            </animated.figure>
            <animated.figure style={styles3} className="pic2" onClick={(e)=>{ImgPopUpSetUp(e)}}>
              <img src={Project3002}></img>
            </animated.figure>
            <animated.figure style={styles4} className="pic2" onClick={(e)=>{ImgPopUpSetUp(e)}}>
              <img src={Project3004}></img>
            </animated.figure>
          </div>
        </div>

      </div>
    </>
  )
}

export default Projects