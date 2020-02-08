import React from 'react'
const TopNavBar = props => {
  return (
    <nav id={props.id}>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#bblog">Blog</a>
        </li>
      </ul>
    </nav>
  )
}
export default TopNavBar
