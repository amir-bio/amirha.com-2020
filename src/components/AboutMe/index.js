import React from 'react'
const AboutMe = props => {
  return (
    <div id={props.id}>
      <div>
        <div className="mono-font secondary-blue">Hello, my name is</div>
        <h1 className="mono-font">Amirhossein Andohkosh</h1>
        <div>
          <p>
            I’m a Backend Engineer based in London. Curently, I’m working at
            Acre, with the mission of changing the way we buy property. I
            graduated in <b>Computer Science</b> from the{' '}
            <b>University of Cambridge</b> in 2018.
          </p>
        </div>
      </div>
      <div id="my-photo-container">
        <img src={props.photoPath} alt="Amirhossein Andohkosh" />
      </div>
    </div>
  )
}
export default AboutMe
