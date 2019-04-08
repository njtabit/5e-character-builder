import React, { Component } from 'react'
import { race } from '../../lists/races.json'
import Filters from '../filters'

class Race extends Component {
  handleClick = () => {
  }

  render() {
    let racelist = []
    let sourcelist = []
    let srcabbr = []

    race.map((r, i) => {

      if (!srcabbr.includes(r.source)) {

        srcabbr.push(r.source)
        /*
        //This check is mostly for dev purposes.  Can be removed once it's safe to assume we've got all the sources straightened out.
        if (src[r.source]) {
          sourcelist.push(<div className="filter-option">{src[r.source]}</div>)
        } else {
          sourcelist.push(<div className="filter-option">{r.source}</div>)
          console.log("Missing " + sourcelist[i])
        }*/

      }

      racelist.push(<div className={'select-box ' + r.source} key={'race' + i} data-name={race[i].name}>{race[i].name}</div>)
    })

    return <div>
      <Filters srclist={srcabbr} />
      <div className="infobox">Infobox</div>
      <div className="builder race">{racelist}</div>
    </div>
  }
}

export default Race
