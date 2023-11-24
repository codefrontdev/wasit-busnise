import React from 'react';
import './home.css';
import Header from '../../components/Header/Header';
import Success from '../../components/Success/Success';
import Covered from '../../components/Covered/Covered';
import Projects from '../../components/Projects/Projects';
import Pitching from '../../components/Pitching/Pitching';
import PriceCovered from '../../components/PriceCovered/PriceCovered';
import StepsSuccess from '../../components/StepsSuccess/StepsSuccess';
import SayAboutUs from '../../components/SayAboutUs/SayAboutUs';
import Blogs from '../../components/Blogs/Blogs';
import Questions from '../../components/Questions/Questions';

const Home = () => {
  window.scrollTo(0, 0)
  return (
    <>
    <Header />
    <Success />
    <Covered />
    <Projects />
    <Pitching />
    <PriceCovered />
    <StepsSuccess />
    <SayAboutUs />
    <Blogs />
    <Questions />
    </>
  )
}

export default Home
