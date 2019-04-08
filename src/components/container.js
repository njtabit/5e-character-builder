import React, { Component } from 'react'
import Home from './pages/home'
import Race from './pages/race'
import Class from './pages/class'
import Background from './pages/background'
import Stats from './pages/stats'
import Feats from './pages/feats'
import Proficiencies from './pages/prof'
import Misc from './pages/misc'
import Spells from './pages/spells'
import Equipment from './pages/equip'
import Info from './pages/info'

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
