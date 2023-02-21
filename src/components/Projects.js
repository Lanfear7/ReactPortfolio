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
              <h1>Dr. Stewart-Patterson</h1>
              <p>Collaborating closely with a client is one of the things I truly relish as a ReactJS developer. So, when a doctor in Vancouver, BC approached me to create a personal portfolio website for them, I couldn't be more thrilled to jump on board.
              <br></br>
              <br></br>
              Together, we worked to capture the client's unique vision and requirements for a website that would not only showcase their exceptional skill, experience, and accomplishments but also impress and captivate visitors. I knew that the key to achieving this would be by creating a visually stunning website that was as dynamic as it was informative.
              <br></br>
              <br></br>
              Using ReactJS, I was able to turn this vision into a reality, crafting an impressive and fully responsive website that was not only visually striking but also incredibly engaging. I utilized a range of custom animations and interactive features to make the portfolio experience truly unforgettable, immersing visitors in a one-of-a-kind showcase of the client's work and achievements.
              <br></br>
              <br></br>
              From start to finish, the client was thrilled with the results, and I couldn't be more proud of the end product. By working closely with the client and leveraging the power of ReactJS, we were able to create a portfolio website that exceeded expectations and left a lasting impression on everyone who visited it.
              </p>              
              <div className='Links'>
                <a href='https://www.drstewartpatterson.ca/'>Live Site</a>
              </div>
            </div>
            <div className='TeachStackLogos Light'>
              <figure>
                <img src={ReactLogo}></img>
              </figure>
              <figure>
                <img src={Spring}></img>
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
        {
          //only for project 2 on width less then 700 it will format the html in a nice way for the user to see it
          windowDimensions.width >= 700 ?
          <div className='Project'>
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
          <div className='ProjectContents'>
            <div className='MainContent'>
              <h1>Blue Monkey's Woodworking</h1>
              <p>Blue Monkey's Woodworking now has a dazzling online presence, thanks to the use of NextJS in crafting a stunning website that showcases the unique beauty of their custom furniture pieces.
              <br></br>
              <br></br>
              I took a user-centric approach, considering the stories and behaviors of their target audience to develop a sleek and intuitive UI that streamlines the browsing and purchasing process. I wanted to make a lasting impression, so I used React Spring to create captivating and fully customizable animations on the landing page that bring their creations to life and engage visitors on a deeper level.
              <br></br>
              <br></br>
              I didn't just stop at aesthetics, though. I aimed to create a seamless communication experience with EmailJS, making it easy for customers to contact the shop owner with inquiries directly from the web page. This helped to reduce friction in the purchasing process, leading to more inquiries and more sales.
              <br></br>
              <br></br>
              I knew that security was of utmost importance, which is why we implemented CloudFare to handle all site traffic, providing SSL and DDoS protection. With my comprehensive approach to design and security, Blue Monkey's Woodworking can now confidently reach a wider audience and stand out in the online marketplace.</p>   
              <div className='Links'>
                <a href='https://www.bluemonkeyswoodworking.ca/'>Live Site</a>
              </div>
            </div>
            <div className='TeachStackLogos Light'>
              <figure>
                <img src={ReactLogo}></img>
              </figure>
              <figure>
                <img src={Spring}></img>
              </figure>
            </div>
          </div>
        </div>
         :
         <div className='Project'>
          <div className='ProjectContents'>
            <div className='MainContent'>
              <h1>Blue Monkey's Woodworking</h1>
              <p>Blue Monkey's Woodworking now has a dazzling online presence, thanks to our use of NextJS in crafting a stunning website that showcases the unique beauty of their custom furniture pieces.
              <br></br>
              <br></br>
              We took a user-centric approach, considering the stories and behaviors of their target audience to develop a sleek and intuitive UI that streamlines the browsing and purchasing process. We wanted to make a lasting impression, so we used React Spring to create captivating and fully customizable animations on the landing page that bring their creations to life and engage visitors on a deeper level.
              <br></br>
              <br></br>
              We didn't just stop at aesthetics, though. We aimed to create a seamless communication experience with EmailJS, making it easy for customers to contact the shop owner with inquiries directly from the web page. This helped to reduce friction in the purchasing process, leading to more inquiries and more sales.
              <br></br>
              <br></br>
              We knew that security was of utmost importance, which is why we implemented CloudFare to handle all site traffic, providing SSL and DDoS protection. With our comprehensive approach to design and security, Blue Monkey's Woodworking can now confidently reach a wider audience and stand out in the online marketplace.</p>                
              <div className='Links'>
                <a href='https://www.bluemonkeyswoodworking.ca/'>Live Site</a>
              </div>
            </div>
            <div className='TeachStackLogos Light'>
              <figure>
                <img src={ReactLogo}></img>
              </figure>
              <figure>
                <img src={Spring}></img>
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
        }
        <div className='Project'>
          <div className='ProjectContents'>
            <div className='MainContent MainContentWhite'>
              <h1>Portfolio</h1>
              <p>I take immense pride in my portfolio, which I built entirely from scratch using React and a few choice libraries such as EmailJS and React Spring for their outstanding animation capabilities. To really take things up a notch, I even utilized global state for some of the animations, utilizing Context and a provider to share key values across the entire application.
              <br></br>
              <br></br>
              When it comes to my portfolio, I believe in putting my best foot forward and showcasing my skills in the most impressive way possible. React is my go-to tool for this, providing unparalleled flexibility and control over the entire development process. The use of external libraries such as EmailJS and React Spring allow me to create a truly immersive experience for users, complete with captivating animations and stunning visual effects that take things to the next level.
              <br></br>
              <br></br>
              Building a portfolio is all about demonstrating your expertise and skillset, and I take this responsibility incredibly seriously. By leveraging the power of React and other cutting-edge tools, I'm able to create a portfolio that truly stands out and leaves a lasting impression on anyone who visits it.
              </p>   
              <div className='Links'>
                <a href='https://brennanformanek.ca/'>Live Site</a>
              </div>
            </div>
            <div className='TeachStackLogos'>
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