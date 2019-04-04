import React, { Component } from 'react'
import Home from './home'
import Race from './race'
import Class from './class'
import Background from './background'
import Stats from './stats'
import Feats from './feats'
import Proficiencies from './prof'
import Misc from './misc'
import Spells from './spells'
import Equipment from './equip'
import Info from './info'

class Container extends Component {
  handleClick = () => {
  }

  render() {
    switch (this.props.contents) {
      case 'Home':
        return <Home />

      case 'Race':
        return <Race />

      case 'Class':
        return <Class />

      case 'Background':
        return <Background />

      case 'Stats':
        return <Stats />

      case 'Feats':
        return <Feats />

      case 'Proficiencies':
        return <Proficiencies />

      case 'Misc':
        return <Misc />

      case 'Spells':
        return <Spells />

      case 'Equipment':
        return <Equipment />

      case 'Info':
        return <Info />

      default:
        return <Home />
    }
  }
}

export default Container
