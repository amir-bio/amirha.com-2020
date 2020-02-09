import React, { useState } from 'react'

import Typist from 'react-typist'

const AboutMe = props => {
  const [introTyped, setIntroTyped] = useState(false)

  return (
    <div id={props.id} className="content-box">
      <div>
        <div className="mono-font secondary-blue">
          <Typist
            cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
            onTypingDone={() => setIntroTyped(true)}
          >
            Hello, my name is
          </Typist>
        </div>
        {introTyped ? (
          <h1 className="mono-font">
            <Typist
              cursor={{
                blink: true
              }}
            >
              Amirhossein Andohkosh
            </Typist>
          </h1>
        ) : null}

        <div>
          <p>
            I’m a Backend Engineer based in London. Currently, I’m working at
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
