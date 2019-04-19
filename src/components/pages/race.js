import React, { useState } from 'react'
import { race } from '../../lists/races.json'
import Filters from '../filters'
import Selector from '../selector'

export default (props) => {
  const [viewing, setViewing] = useState('')

  let racelist = []
  let srclist = []

  const selectRace = (r) => {
    setViewing(r)
  }

  race.map((r, i) => {

    if (!srclist.includes(r.source)) {
      srclist.push(r.source)
    }

    racelist.push(<Selector source={r.source} filters={props.filters} select={ selectRace } key={'race' + i} name={race[i].name} index={i} />)
  })

  return <div>
    <Filters srclist={srclist} toggle={props.toggle} filters={props.filters} />
    <div className="infobox">{ viewing || 'Infobox' }</div>
    <div className={'builder race'}>{racelist}</div>
  </div>
}
