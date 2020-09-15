import React from 'react'
import { Box, Flex, Text } from 'rebass'

import { FiGitlab, FiCode, FiAperture, FiPackage, FiDownload, FiBookOpen } from "react-icons/fi";

import { theme, Link, H3, PurpleLink } from '../../common'


// TODO: research higher order components and potentially convert this to one
const ELPSProjectCard = props => (
  <Box bg='orange' className="project-card" sx={{
    borderRadius: 10,
    mx: ['5%', '10%', 0, '5%'],
  }}>
    <H3 className="project-card-heading" theme={theme} fontSize="10em" textAlign='center' p={0} >ELPS VSCode Extension</H3>
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

const PedestrianDetectorProjectCard = props => (
  <Box bg='orange' className="project-card" sx={{
    borderRadius: 10,
    mx: ['5%', '10%', 0, '5%'],
  }}>
    <H3 className="project-card-heading" theme={theme} fontSize="10em" textAlign='center' p={0} >Pedestrian Detector</H3>
    <FiAperture className="project-card-main-icon" size={200} strokeWidth={0.5} alignItems="center" />
    <Text bg='white' color='primary' className='project-description'>

      {/* TODO: ADD appropriatee description here */}
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
      <Box mb={2} mr={4}>
        <Link href="https://gitlab.com/amirH.A/vscode-elps"><FiGitlab size="30" strokeWidth="1" /></Link>
      </Box>
    </Flex>
  </Box>
)

const RetailWebsiteGenProjectCard = props => (
  <Box bg='orange' className="project-card" sx={{
    borderRadius: 10,
    mx: ['5%', '10%', 0, '5%'],
  }}>
    <H3 className="project-card-heading" theme={theme} fontSize="10em" textAlign='center' p={0}>Retail Startup Automator</H3>
    <FiPackage className="project-card-main-icon" size={200} strokeWidth={0.5} alignItems="center" />
    <Text bg='white' color='primary' className='project-description'>
      {/* TODO: Add appropriate description here */}
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
      <Box mb={2} mr={4}>
        {/* TODO: Create a blog post for explaining this project and add a link to it here */}
        <Link href=""><FiBookOpen size="30" strokeWidth="1" /></Link>
      </Box>
    </Flex>
  </Box>
)
export { ELPSProjectCard, PedestrianDetectorProjectCard, RetailWebsiteGenProjectCard }
