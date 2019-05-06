import React from 'react'
import Tab from './tab'
import Container from './container'

import useStore from '../state/store/useStore'

export default () => {
  const tab = useStore( (state) => state.tab, 'Race' )

  const tabs = ['Home', 'Race', 'Class', 'Background', 'Stats', 'Feats', 'Proficiencies', 'Misc', 'Spells', 'Equipment', 'Info']

  // Cycles through the tabs array and creates a Tab component for each, then adds the Container
  const app =
    <div id="wrapper">
      <nav id="nav-tabs">
        {
          tabs.map( (name, i) => {
            return <Tab name={ name } key={ 'tab' + i } activeTab={ tab } />
          })
        }
      </nav>

      <div id="app-container">
        <Container contents={ tab } />
      </div>

    </div>

  return app
}
