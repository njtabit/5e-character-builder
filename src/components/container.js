import React, { useState, useEffect } from 'react'
import { src } from '../lists/sources'
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

export default (props) => {
  
  const [filters, setFilters] = useState( (v) => {
    let obj = {}
    Object.keys(src).map( (source) => {
      obj[source] = true
    })
    return obj
  })

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

  const Tab = tabs[props.contents]

  const toggle = (source) => {
    setFilters(
      (prevState) => ({
        ...prevState,
        [source]: !prevState[source]

      })
    )
  }

  return <Tab toggle={toggle} filters={filters} />
}
