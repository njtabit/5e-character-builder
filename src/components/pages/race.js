import React, { useState } from 'react'
import { race } from '../../lists/races.json'
import Filters from '../filters'
import Selector from '../selector'
import Info from '../infobox'

export default (props) => {
  const [viewing, setViewing] = useState('')

  let racelist = []
  let srclist = []

  const selectRace = (r) => {
    setViewing(r.index)
  }

  race.map((r, i) => {

    if (!srclist.includes(r.source)) {
      srclist.push(r.source)
    }

    racelist.push(<Selector source={r.source} filters={props.filters} select={ selectRace } key={'race' + i} name={race[i].name} index={i} />)
  })

  return <div>
    <Filters srclist={srclist} toggle={props.toggle} filters={props.filters} />
    <Info list={ race } viewing={ race[viewing] } />
    <div className={'builder race'}>{racelist}</div>
  </div>
}
