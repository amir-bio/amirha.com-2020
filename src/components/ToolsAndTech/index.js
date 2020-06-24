import React from 'react'
import { Box, Flex } from 'rebass'
import { Tiles } from '@rebass/layout'

import bulb from './bulb.svg'
import monitor from './monitor.svg'
import gear from './gear.svg'
import puzzle from './puzzle.svg'

const IconSet = props => (
  // props should contain icon, iconALt and items where items is an array of strings
  // icon-set acts a column
  <Box className="icon-set" px={2} py={2} width={[1, 1, 1 / 3]}>
    <img src={props.icon} alt={props.iconAlt} />
    <h3>{props.title ? props.title : 'NO TILE'}</h3>
    <ul>
      {props.items.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  </Box>
)
const ToolsAndTech = props => (
  <div id={props.id} className="content-box">
    <h2>Tools and Technologies</h2>
    <Flex flexWrap='wrap' p={50}>
      <Tiles columns={[1, null, 3]}>
        <IconSet
          title="Frontend"
          icon={monitor}
          iconAlt="test"
          items={['React', 'Typescript', 'jQuery']}
        />
        <IconSet
          title="Backend"
          icon={gear}
          iconAlt="test"
          items={[
            'C++',
            'Go',
            'Python',
            'NodeJS',
            'Perl',
            'Lisp (elps dialect)',
            'Java',
            'PHP'
          ]}
        />
        <IconSet
          title="Infrastructure"
          icon={puzzle}
          iconAlt="test"
          items={['Terraform', 'Kubernetes', 'Docker', 'AWS', 'GCP']}
        />
      </Tiles>

    </Flex>
  </div>
)

export default ToolsAndTech
