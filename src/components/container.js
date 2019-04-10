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
    const tabs = {
      Home,
      Race,
      Class,
      Background,
      Stats,
      Feats,
      Proficiencies,
      Misc,
      Spells,
      Equipment,
      Info
    }
    const Tab = tabs[this.props.contents]
    return <Tab />
  }
}

export default Container
