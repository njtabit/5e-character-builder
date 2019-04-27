import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { race } from '../../lists/races.json'
import Filters from '../filters'
import Selector from '../selector'
import Info from '../infobox'

const Race = (props) => {
  const [viewing, setViewing] = useState(0)

  let racelist = []
  let srclist = []

  const selectRace = (r) => {
    setViewing(r.index)
  }

  race.map( (r, i) => {

    if (!srclist.includes(r.source)) {
      srclist.push(r.source)
    }

    racelist.push(<Selector selected={ viewing === i } source={ r.source } filters={ props.filters } select={ selectRace } key={ 'race' + i } name={ race[i].name } index={ i } />)
  })

  return <div>
    <Filters srclist={srclist} toggle={props.toggle} filters={props.filters} />
    <Info list={ race } viewing={ race[viewing] } />
    <div className={'builder race'}>{racelist}</div>
  </div>
}

Race.propTypes = {
  toggle: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired
}

export default Race
