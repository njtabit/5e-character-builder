import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { race } from '../../lists/races.json'
import Filters from '../filters'
import Selector from '../selector'
import Info from '../infobox'

import useDispatch from '../../state/store/useDispatch'
import useStore from '../../state/store/useStore'

import setRace from '../../state/actions/character/setRace'
import setInfobox from '../../state/actions/setInfobox'

const Race = (props) => {
  const dispatch = useDispatch()
  const raceState = useStore( state => state.charReducer.race, false)
  const [viewing, setViewing] = useState(race.indexOf(raceState))
  console.log('raceState:', raceState)

  let racelist = []
  let srclist = []

  useEffect(() => {
    if (!raceState) {
      setViewing(0)
      setInfobox(race[0], dispatch)
      setRace(race[0], dispatch)
      console.log('If passed')
    } // else {
    //   console.log('effect else', race.indexOf(raceState))
    //   setViewing(race.indexOf(raceState))
    // }
  })

  const selectRace = (r) => {
    setViewing(r.index)
    setInfobox(race[r.index], dispatch)
    setRace(race[r.index], dispatch)
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
