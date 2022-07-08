import React, { Suspense } from "react";
import styled from "styled-components";
import img from "../assets/Images/15.webp";

const NavBar = React.lazy(() => import("../components/NavBar"));
const Logo = React.lazy(() => import("../components/Logo"));


const Img = styled.section`
`

const Section = styled.section`
height: 90vh;
width: 100vw;
overflow: hidden;
text-align: center

`
;

const Home = () => {
  return (
    <Section id="home">
      <img src={ img } />
      <Suspense fallback={<></>}>
        <Logo />
        <NavBar />
      </Suspense>
    </Section>
  );
};

export default Home;
