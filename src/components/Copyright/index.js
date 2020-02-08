import React from 'react'

// returns 2020, unless the year is after in 2020, in which case it
// returns "2020-<current year>" (e.g. in 2022 it will return 2020-2022)
const copyrightYear = () => {
  const originalCreationYear = '2020'
  const currentYear = new Date().getFullYear()
  if (currentYear === originalCreationYear) {
    return originalCreationYear
  } else {
    return originalCreationYear + '-' + currentYear
  }
}
const Copyright = props => (
  <div id="copyright">
    {' '}
    Copyright &copy; {copyrightYear()} Amirhossein Andohkosh. All rights
    reserved.
  </div>
)

export default Copyright
