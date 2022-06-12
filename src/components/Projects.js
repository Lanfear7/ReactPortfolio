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


import ReactLogo from '../public/images/ReactLogo.png'
import Lambda from '../public/images/lambdaLogo.png'
import AWS from '../public/images/aws.png'
import DynamoDB from '../public/images/dynamoDB.png'
import MySql from '../public/images/mysql.png'
import Node from '../public/images/node.png'
import Express from '../public/images/express.png'
import Spring from '../public/images/spring.png'
import EmailJs from '../public/images/emailjs.png'



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
              <p>RuneDen is a hub for gamers to get texture packs or seeds for their Minecraft worlds! I bild this app using React,Node/Express, and MySQL. You are able to create a account and login inorder to get varified and post texture packs. You can download any texture pack avalibe without an account though.</p>
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
              <p>This portfolio was built useing React along with some React packages such as React-Spring for the animation and emailJs for a potential client to beable to contact me.</p>
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
              <p>This portfolio was built useing React along with some React packages such as React-Spring for the animation and emailJs for a potential client to beable to contact me.</p>
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
              <h1>Project 3</h1>
              <p>RuneDen is a hub for gamers to get texture packs or seeds for their Minecraft worlds! I bild this app using React,Node/Express, and MySQL. You are able to create a account and login inorder to get varified and post texture packs. You can download any texture pack avalibe without an account though.</p>
              <div className='Links'>
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

      </div>
    </>
  )
}

export default Projects