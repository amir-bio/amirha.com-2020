import React from 'react'

import './style.css'

const lightGreen = '#3ECF8E'
const purple = '#9251ac'

const timelineStyle = {
  textAlign: 'center'
}
//tODO
// parent of odd divs
// margin-right: 50PX;
// margin-left: -50px;
// min-width: 20px; to small circle to ensure oddines don't collapse
const timelineContainerOuterStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: 5,
  margin: '20px auto',
  backgroundColor: purple
}

const timelineContainerStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const timelineEntryBoxStyle = {
  backgroundColor: lightGreen,
  display: 'block',
  fontSize: 20,
  width: 360,
  minHeight: 50,
  paddingLeft: 20,
  paddingTop: 15,
  paddingBottom: 15,
  textAlign: 'start'
}

const triangleBorderStyle = '10px solid ' + lightGreen
// returns style for arrow, with optional argument that reverse the direction
const arrowStyle = rightSide => ({
  width: 0,
  height: 0,
  borderTop: '10px solid transparent',
  borderBottom: '10px solid transparent',
  // if it's on the right side, the arrow should point to the right
  ...(rightSide
    ? { borderLeft: triangleBorderStyle }
    : { borderRight: triangleBorderStyle })
})

const bigCircleStyle = {
  backgroundColor: purple,
  borderRadius: '50%',
  width: 50,
  height: 50,
  lineHeight: '50px',
  textAlign: 'center',
  alignSelf: 'center',
  fontWeight: 'bold'
}

const smallCircleStyle = rightSide => ({
  borderRadius: '50%',
  width: 20,
  minWidth: 20, //required to ensure left side circle don't have width of 0
  height: 20,
  backgroundColor: purple,
  alignSelf: 'center',

  // these values were derived by experimentation
  ...(rightSide
    ? { marginLeft: 40, marginRight: -12 }
    : { marginLeft: -7, marginRight: 40 })
})

const TimelineEntry = ({ text, rightSide }) => {
  const [isVisible, setVisible] = React.useState(false)
  const domRef = React.useRef()
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        ...(rightSide
          ? { margin: '0px 50px 20px 0', flexDirection: 'row-reverse' }
          : { margin: '0px auto' })
      }}
    >
      <div style={smallCircleStyle(rightSide)}></div>
      <div
        // add class name of fade-in-section-right or fade-in-section-left that determines the animation direction (defined in app.css)
        className={`fade-in-section-${rightSide ? 'right' : 'left'} ${
          isVisible ? 'is-visible' : ''
          }`}
        ref={domRef}
        style={{
          alignContent: 'centre',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: -7,
          // slideInFromLeft and slideInFromRight are defined in App.css
          ...(rightSide
            ? {
              flexDirection: 'row-reverse'
              // animation: '1s ease-out 0s 1 slideInFromLeft'
            }
            : {
              // animation: '1s ease-out 0s 1 slideInFromRight'
            })
        }}
      >
        <div style={arrowStyle(rightSide)}> </div>
        <div style={timelineEntryBoxStyle}> {text}</div>
      </div>
    </div>
  )
}

// eventsInYear is expected to be an array
const TimelineEntriesWithinAYear = ({ eventsInYear }) => (
  // every other entry is on the opposite direction
  <>
    {eventsInYear.map((event, index) => (
      <TimelineEntry
        key={index}
        text={event.description}
        rightSide={event.rightSide}
      />
    ))}
  </>
)

const AllTimelineEntries = ({ data }) => {
  const years = Object.keys(data)
  return (
    <>
      {years.map((year, index) => (
        <div key={index} style={timelineContainerStyle}>
          <div style={bigCircleStyle}>{year}</div>
          <TimelineEntriesWithinAYear eventsInYear={data[year]} />
        </div>
      ))}
    </>
  )
}

// The data is passed through data which has the following expected format:
// { year: ["Event description", events...], year: [events...], ... }
// The data is augmented to indicate which side each event should be on
// The entries alternate position regardless of the year section they're under
// This is done at this level as the lower components don't have access to the
// full list of entries and can't easily find out which side to render the entry on
// Example of new structure
// {
//   "2011": [
//     {
//       "description": "Graduated ..",
//       "rightSide": false
//     },
//     ...
//   ],
//   ...
// }

const Timeline = ({ data }) => {
  let newDataStructure = {}
  let rightSide = false
  Object.entries(data).map(([year, events]) => {
    newDataStructure[year] = []
    for (const event of data[year]) {
      // event is a string that describes the event
      newDataStructure[year].push({
        description: event,
        rightSide: rightSide
      })
      rightSide = !rightSide // alternate boolean
    }
    return newDataStructure // only here to avoid linter warning (cause being mixing of functional and procedural style)
  })

  return (
    <div style={timelineStyle}>
      <h2 className="mono-font">My Journey so far</h2>
      <div id="timeline-container-outer" style={timelineContainerOuterStyle}>
        <AllTimelineEntries data={newDataStructure} />
      </div>
    </div>
  )
}

export default Timeline
