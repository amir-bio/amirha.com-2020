import React from 'react'

import bulb from './bulb.svg'
import monitor from './monitor.svg'
import gear from './gear.svg'
import puzzle from './puzzle.svg'

const IconSet = props => (
  // props should contain icon, iconALt and items where items is an array of strings
  // icon-set acts a column
  <div className="icon-set">
    <img src={props.icon} alt={props.iconAlt} />
    <h3>{props.title ? props.title : 'NO TILE'}</h3>
    <ul>
      {props.items.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  </div>
)
const ToolsAndTech = props => (
  <div id={props.id} className="content-box">
    <h2>Tools and Technologies</h2>
    <div id="icon-set-parent">
      <IconSet
        title="Design"
        icon={bulb}
        iconAlt="test"
        items={['Photoshop', 'Figma', 'Swagger']}
      />
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
    </div>
  </div>
)

export default ToolsAndTech
