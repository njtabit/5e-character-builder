import React, { Component } from 'react'
import { race } from '../../lists/races.json'
import Filters from '../filters'
import Selector from '../selector'

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
      }

      racelist.push(<Selector source={r.source} filters={this.props.filters} key={'race' + i} name={race[i].name} />)
    })

    return <div>
      <Filters srclist={srcabbr} toggle={this.props.toggle} filters={this.props.filters} />
      <div className="infobox">Infobox</div>
      <div className={'builder race' + (this.props.filters.exclusives?' exclusives':'')}>{racelist}</div>
    </div>
  }
}

export default Race
