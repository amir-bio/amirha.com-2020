import React from 'react'

const lightGreen = '#3ECF8E'
const purple = '#9251ac'

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

const arrowRightStyle = {
  width: 0,
  height: 0,
  borderTop: '60px solid transparent',
  borderBottom: '60px solid transparent',
  borderLeft: ' 60px solid green'
}
const arrowLeftStyle = {
  width: 0,
  height: 0,
  borderTop: '10px solid transparent',
  borderBottom: '10px solid transparent',
  borderRight: '10px solid ' + lightGreen
}

const bigCircleStyle = {
  padding: 10,
  margin: 'auto',
  borderRadius: '50%',
  width: 70,
  height: 70,
  backgroundColor: purple
}
// #timeline {
//   text-align: center;
// }

// #timeline-container {
//   display: flex;
//   align-items: center;
//   flex-direction: column;
// }

const smallCircleStyle = {
  padding: 10,
  margin: 'auto',
  borderRadius: '50%',
  width: 20,
  height: 20,
  backgroundColor: purple
}
const timelineEntry = (text, direction) => (
  <div style={{ display: 'flex' }}>
    <div style={smallCircleStyle}></div>
    <div
      style={{
        alignContent: 'centre',
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={arrowLeftStyle}> </div>
      <div style={timelineEntryBoxStyle}> {text}</div>
    </div>
  </div>
)

// props.eventsInYear is expected to be an array
const TimelineEntriesWithinAYear = props => (
  <>{props.eventsInYear.map(event => timelineEntry(event))}</>
)

const AllTimelineEntries = props => (
  <>
    {Object.keys(props.data).map(year => (
      <>
        <div style={bigCircleStyle}>{year}</div>
        <TimelineEntriesWithinAYear eventsInYear={props.data[year]} />
      </>
    ))}
  </>
)

// The data is passed through props.data which has the following expected format:
// { year: [events...], year: [events...], ... }
const Timeline = props => (
  <div id={props.id}>
    <h2 className="mono-font">My Journey so far</h2>
    <div id="timeline-container">
      {console.log('t1', props.data)}
      <AllTimelineEntries data={props.data} />
    </div>
  </div>
)

export default Timeline
