import React from 'react'
import { Box } from 'rebass'
import { Tiles } from '@rebass/layout'
import styled from 'styled-components'

import monitor from './monitor.svg'
import gear from './gear.svg'
import puzzle from './puzzle.svg'

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  columns: ${props => props.columns};
`;

// centered image
const Img = styled.img`
  display: block;
  margin: 0 auto;
`;

const H3 = styled.h3`
  padding-top: ${props => props.paddingTop};
`;

// props.headingPaddingTop is an optional property that can be used to align the
// headings across the columns when the height of the images is not the same
const IconSet = props => {
  // simple heuristic to have 2 columns when more than 5 list items
  const ulColumns = props.items.length > 5 ? 2 : 1
  return (
    // props should contain icon, iconALt and items where items is an array of strings
    // icon-set acts a column
    <Box sx={{ textAlign: 'center' }}>
      <Img src={props.icon} alt={props.iconAlt} />
      <H3 paddingTop={props.headingPaddingTop ? props.headingPaddingTop : 0}> {props.title ? props.title : 'NO TILE'}</H3>
      <Ul columns={ulColumns}>
        {props.items.map(item => (
          <li>{item}</li>
        ))}
      </Ul>
    </Box>
  )
}

const ToolsAndTech = props => (
  <Tiles columns={[1, null, 3]} px={5} mt={50}>
    <IconSet
      title="Frontend"
      icon={monitor}
      iconAlt="Frontend technologies"
      items={['React', 'Typescript', 'jQuery']}
    />
    <IconSet
      title="Backend"
      icon={gear}
      iconAlt="Backend technologies"
      items={[
        'C++',
        'Go',
        'ELPS (A Lisp dialect)',
        'Python',
        'NodeJS',
        'Java',
        'PHP',
        'Perl',
        'MySQL'
      ]}
    />
    <IconSet
      title="Infrastructure"
      icon={puzzle}
      iconAlt="Infrastructure technologies"
      items={['Terraform', 'Kubernetes', 'Docker', 'AWS', 'GCP']}
      // heigh of puzzle image is 29px shorter than the other two, so pad the
      // heading to align all 3 headings
      headingPaddingTop="29px"
    />
  </Tiles>
)

export default ToolsAndTech
