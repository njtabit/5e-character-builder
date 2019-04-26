import React, { useState } from 'react'
import Tab from './tab'
import Container from './container'

export default (props) => {
  const [tab, setTab] = useState('Race') //Home should be default, anything else is for dev purposes

  const tabs = ['Home', 'Race', 'Class', 'Background', 'Stats', 'Feats', 'Proficiencies', 'Misc', 'Spells', 'Equipment', 'Info']

  const changeTabs = (name) => {
    setTab(name)
  }

  // Cycles through the tabs array and creates a Tab component for each, then adds the Container
  const app =
    <div id="wrapper">
      <nav id="nav-tabs">
        {
          tabs.map( (name, i) => {
            return <Tab name={ name } key={ 'tab' + i } clickHandler={ changeTabs } activeTab={ tab } />
          })
        }
      </nav>

      <div id="app-container">
        <Container contents={ tab } />
      </div>

    </div>

  return app
}
