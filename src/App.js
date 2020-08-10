import React from 'react'
import './ProjectCard.css'

import 'typeface-roboto'
import 'typeface-roboto-mono'

import { IconContext } from "react-icons";
import { FiLinkedin, FiGitlab, FiGithub, FiMail, FiCode, FiAperture, FiPackage, FiDownload } from "react-icons/fi";

import { ThemeProvider } from 'emotion-theming'
import {
  Box,
  Card,
  Image,
  Heading,
  Text,
  Flex,
} from 'rebass'
import { Tiles } from '@rebass/layout'


import myPhoto from './me.png'
import timelineData from './timelineData.json'

import TopNavBar from './components/TopNavBar'
import AboutMe from './components/AboutMe'
import ToolsAndTech from './components/ToolsAndTech'
import Timeline from './components/Timeline'
import Copyright from './components/Copyright'
import { ELPSProjectCard, PedestrianDetectorProjectCard, RetailWebsiteGenProjectCard } from './components/ProjectCards'
import { theme, Link, H1, H2, H3, SecondaryLink, PurpleLink, HeroIcons } from './common'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App" color='background' bg='primary'>
        <nav>
          <Flex alignItems='center'>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#blog">Blog</Link>
          </Flex>
        </nav>
        <Flex flexWrap='wrap' flexDirection='column' justifyContent='center' alignItems='center'>
          <Image
            width={[200, 250, 300]}
            src={myPhoto}
            alt="Amirhossein Andohkosh"
            alignItems='center'
            m='auto'
          />
          <Box>
            <Text p={1} textAlign='center'>
              {/* passing theme in manually for now, theme not getting passed (prob. due to nesting) */}
              <H1 theme={theme}>Hey👋, I’m Amirhossein Andohkosh</H1>
              <H2 theme={theme}>Senior Backend Engineer at <SecondaryLink theme={theme} href="https://acresoftware.com">Acre</SecondaryLink></H2>
            </Text>
          </Box>
          <IconContext.Provider value={{ color: "white", size: "2em" }}>
            <HeroIcons theme={theme} id="contact">
              <a href="https://www.linkedin.com/in/amirhossein-andohkosh/"><FiLinkedin strokeWidth={1} /> </a>
              <a href="https://gitlab.com/amirH.A"><FiGitlab strokeWidth={1} /></a>
              <a href="https://github.com/amirha97"><FiGithub strokeWidth={1} /></a>
              <a ><FiMail strokeWidth={1} /></a>
            </HeroIcons>
          </IconContext.Provider>
        </Flex>
        <Flex mb={-50} p={0} >
          <Box p={0} my={100} width={1} id="about">
            <Text p={5} color='primary' bg='white'>
              <H2 theme={theme} >About</H2>
              <p>
                I’m a software engineer based in London. I graduated in Computer Science from the <PurpleLink theme={theme} href="https://www.cam.ac.uk/">University of Cambridge</PurpleLink> in 2018.
                <br />  <br />
                Curently I’m working at Acre, as a senior backend engineer. Our mission is to transform the way we buy property.
                Prior to Acre I worked at Netcraft as computer scientist.
                <br /> <br />
                I’m always looking for new challenges and ways to improve myself and the world around me.
              </p>
            </Text>
          </Box>
        </Flex>

        <Box px={5} id="projects">
          <H2 theme={theme} >Projects</H2>
        </Box>
        <Flex flexWrap='wrap' p={50}>
          <Tiles columns={[1, 1, 2, 3]} sx={{
            alignItems: 'flex-start'
          }}>
            <ELPSProjectCard />
            <PedestrianDetectorProjectCard />
            <RetailWebsiteGenProjectCard />
          </Tiles>
        </Flex>

        <Box bg='white' color='primary' py={30}>
          <Box px={5} id="tools-tech" >
            <H2 theme={theme}>Tools and Technologies</H2>
          </Box>
          <ToolsAndTech />
        </Box>
        <Timeline id="timeline" data={timelineData} />
        <Copyright />
      </Box >
    </ThemeProvider >
  )
}
export default App
