import React, { useState } from 'react'
import PropTypes from 'prop-types'
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

 const Container = (props) => {

  const [filters, setFilters] = useState( () => {
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

  const View = tabs[props.contents]

  const toggle = (source) => {
    setFilters(
      (prevState) => ({
        ...prevState,
        [source]: !prevState[source]

      })
    )
  }

  return <View toggle={toggle} filters={filters} />
}

Container.propTypes = {
  contents: PropTypes.string.isRequired
}

export default Container
