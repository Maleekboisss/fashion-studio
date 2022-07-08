import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Home from "./Sections/Home";
import { AnimatePresence } from "framer-motion";
import About from "./Sections/About";
import Shop from "./Sections/Shop";
import ScrollTriggerProxy from './components/ScrollTriggerProxy';
import Banner from "./Sections/Banner";
import NewArrival from "./Sections/NewArrival";
import Footer from './Sections/Footer'
import Loader from "./components/Loader";


function App() {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, [])
  

  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            smartphone:{
              smooth:true,
            },
            tablet:{
              smooth:true,
            }
          }}
          watch={
            [
            ]
          }
          containerRef={containerRef}
        >
        <AnimatePresence>
        {loaded ? null : <Loader />}
        </AnimatePresence>
        <ScrollTriggerProxy />
          <AnimatePresence>
          <div className='App' data-scroll-container ref={containerRef}>
            <Home />
            <About />
            <Shop />
            <Banner />
            <NewArrival />
            <Footer />
          </div>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;