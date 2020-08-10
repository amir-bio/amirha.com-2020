import React from 'react'
import './ProjectCard.css'

import 'typeface-roboto'
import 'typeface-roboto-mono'

import myPhoto from './me.png'
import timelineData from './timelineData.json'

import TopNavBar from './components/TopNavBar'
import AboutMe from './components/AboutMe'
import ToolsAndTech from './components/ToolsAndTech'
import Timeline from './components/Timeline'
import Copyright from './components/Copyright'
import styled from 'styled-components'


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
// theme taken from rebase preset as starting point
const theme = {
  breakpoints: ['40em', '52em', '64em'],

  colors: {
    text: '#fff',
    background: '#fff',
    primary: '#293D5A',
    secondary: '#3FDFE9',
    orange: '#F39C12',
    purple: '#9251AC',
    muted: '#f6f6f9',
    gray: '#dddddf',
    highlight: 'hsla(205, 100%, 40%, 0.125)'
  },
  fonts: {
    body: 'Roboto',
    heading: 'Roboto mono, Courier',
    monospace: 'Roboto mono, Courier'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 600
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48
  },
  radii: {
    "default": 4,
    circle: 99999
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)'
  },
  // rebass variants
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [5, 6, 7]
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }
  },
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle'
    },
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card'
    },
    link: {
      color: 'primary'
    },
    nav: {
      fontSize: 1,
      fontWeight: 'bold',
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus,.active': {
        color: 'primary'
      }
    }
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default'
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px'
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    }
  }
};


const Ul = styled.ul`
  color: ${props => props.theme.colors.text};
  list-style: none;
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  margin-left:30px;
  margin-top:20px;
  margin-bottom:70px;
  &:hover {
    color: #3FDFE9;
  }
  `;
// stroke: ${props => props.theme.colors.secondary};
// When the issue with having to pass in the theme manually one by one is fixed, above should be replaced with this



const H1 = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.heading};
`;

const H2 = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.heading};
`;

const H3 = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.heading};

  &.project-card-heading {
    text-align: center;
    color: "red";
    font-weight: ${props => props.theme.fontWeights.bold};
    padding-top: 10px;
  }
`;

const SecondaryLink = styled.a`
  color: ${props => props.theme.colors.secondary};
`;

const PurpleLink = styled.a`
  color: ${props => props.theme.colors.purple};
  text-decoration: none;
  &:hover {
    font-weight: bold
  }
`;

const HeroIcons = styled.div`
  svg {
    margin-right: 20px;
  }
  svg:hover {
    stroke: ${props => props.theme.colors.secondary};
  }
`;


// TODO: research higher order components and potentially convert this to one
const ELPSProjectCard = props => (
  <Box bg='orange' className="project-card" sx={{
    borderRadius: 10,
    mx: ['5%', '10%', 0, '5%'],
  }}>
    <H3 className="project-card-heading" theme={theme} fontSize="10em" textAlign='center' p={0} >ELPS VSCode extension</H3>
    <FiCode className="project-card-main-icon" size={200} strokeWidth={0.5} alignItems="center" />
    <Text bg='white' color='primary' className='project-description'>
      ELPS is a dialect of Lisp which we write our <PurpleLink theme={theme} href="https://en.wikipedia.org/wiki/Smart_contract">smart contracts</PurpleLink> in at Acre. <br />
      As ELPS is a new languages created by Luther Systems, I worked on creating a set of tooling which our blockchain team uses on a daily basis. <br /> <br />
      This extension produces more semantics scopes than any other LISP VSCode extension, meaning the editors' theme has access to more information that it can use to provide syntax highlighting.
    </Text>
    <Flex className="project-card-bottom-icons" alignContent="center" justifyContent='center' sx={{
      pt: 4,
      'svg:hover': {
        stroke: theme.colors.primary
      }
    }}>
      <Box mb={2}>
        <Link href="https://gitlab.com/amirH.A/vscode-elps"><FiGitlab size="30" strokeWidth="1" /></Link>
      </Box>
      <Box mb={2}>
        <Link href="https://marketplace.visualstudio.com/items?itemName=AmirHA.elps"><FiDownload size="30" strokeWidth="1" /></Link>
      </Box>
    </Flex>
  </Box>
)


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
            <HeroIcons theme={theme}>
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
            <ELPSProjectCard />
            <ELPSProjectCard />
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
