import React from 'react'
import { race } from '../../lists/races.json'
import Filters from '../filters'
import Selector from '../selector'

export default (props) => {

  let racelist = []
  let sourcelist = []
  let srcabbr = []

  race.map((r, i) => {

    if (!srcabbr.includes(r.source)) {

      srcabbr.push(r.source)
    }

    racelist.push(<Selector source={r.source} filters={props.filters} key={'race' + i} name={race[i].name} />)
  })

  return <div>
    <Filters srclist={srcabbr} toggle={props.toggle} filters={props.filters} />
    <div className="infobox">Infobox</div>
    <div className={'builder race' + (props.filters.exclusives?' exclusives':'')}>{racelist}</div>
  </div>
}
