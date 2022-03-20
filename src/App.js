import { useState, useEffect } from 'react';
import Banner from './components/Banner';
import BurgerBtn from './components/BurgerBtn';
import Projects from './components/Projects';
import About from './components/About'
import { ScreenSizeContext } from './helper/Context';       //Context -> Golbal State
import './public/stylesheets/index.css'
import ContactMe from './components/ContactMe';

function App() {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [toggle, setToggle] = useState(false)
  const [toggleAboutAnimation, setToggleAboutAnimation] = useState(false)
  const [scrollTop, setScrollTop] = useState(0);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }


  useEffect(() => {                                                                                         //Holds global value for the scroll position inorder to trigger animations
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    if(windowDimensions.height >= 500 && windowDimensions.height <= 800){
      if(scrollTop > 650){
        setTimeout(() => {
          setToggleAboutAnimation(true)
        },500)
      }
    }else if(windowDimensions.height > 800){
      if(scrollTop > 750){
        setTimeout(() => {
          setToggleAboutAnimation(true)
        },500)
        
      }
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  useEffect(() => { 
    document.title = "Brennan Formanek";                                                                                    //Holds global value for the width and height of the browser inoder to trigger animations
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      setToggle(false)
      setToggleAboutAnimation(false)
      setToggleAboutAnimation(true)
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <ScreenSizeContext.Provider value={{windowDimensions, setWindowDimensions,
    toggle, setToggle,
    toggleAboutAnimation, setToggleAboutAnimation,
    scrollTop, setScrollTop,

    }}>
      <div className="App">
        <BurgerBtn  />
        <Banner />
        <About /> 
        <Projects />
        <ContactMe />
      </div>
    </ScreenSizeContext.Provider>
  );
}

export default App;
