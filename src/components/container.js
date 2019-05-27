import React from 'react'
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

import useDispatch from '../state/store/useDispatch'
import useStore from '../state/store/useStore'

import setFilters from '../state/actions/setFilters'

const Container = () => {
  const dispatch = useDispatch()
  let filters = {}
  Object.keys(src).map((source) => {
    filters[source] = true
  })
  setFilters(filters, dispatch)
  console.log('filters set', filters)

  // const tabs = {
  //   Home,
  //   Race,
  //   Class,
  //   Background,
  //   Stats,
  //   Feats,
  //   Proficiencies,
  //   Misc,
  //   Spells,
  //   Equipment,
  //   Info
  // }

  const contents = useStore(state => state.miscReducer.tab, 'Race')
  // const View = tabs[contents]

  const toggle = (source) => {
    setFilters(
      (prevState) => ({
        ...prevState,
        [source]: !prevState[source]

      })
    )
  }

  const homeVisible = contents == 'Home' ? 'block' : 'none';
  const raceVisible = contents == 'Race' ? 'block' : 'none';
  const classVisible = contents == 'Class' ? 'block' : 'none';
  const backgroundVisible = contents == 'Background' ? 'block' : 'none';
  const statsVisible = contents == 'Stats' ? 'block' : 'none';
  const featsVisible = contents == 'Feats' ? 'block' : 'none';
  const proficienciesVisible = contents == 'Proficiencies' ? 'block' : 'none';
  const miscVisible = contents == 'Misc' ? 'block' : 'none';
  const spellsVisible = contents == 'Spells' ? 'block' : 'none';
  const equipmentVisible = contents == 'Equipment' ? 'block' : 'none';
  const infoVisible = contents == 'Info' ? 'block' : 'none';

  // return <View toggle={toggle} filters={filters} />
  return (
    <div>
      <div style={{ display: homeVisible }}>
        <Home toggle={toggle} filters={filters} />
      </div>
      <div style={{ display: raceVisible }}>
        <Race toggle={toggle} filters={filters} />
      </div>
      <div style={{ display: classVisible }}>
        <Class toggle={toggle} filters={filters} />
      </div>
      <div style={{ display: backgroundVisible }}>
        <Background toggle={toggle} filters={filters} />
      </div>
      <div style={{ display: statsVisible }}>
        <Stats toggle={toggle} filters={filters} />
      </div>
      <div style={{ display: featsVisible }}>
        <Feats toggle={toggle} filters={filters} />
      </div>
      <div style={{ display: proficienciesVisible }}>
        <Proficiencies toggle={toggle} filters={filters} />
      </div>
      <div style={{ display: miscVisible }}>
        <Misc toggle={toggle} filters={filters} />
      </div>
      <div style={{ display: spellsVisible }}>
        <Spells toggle={toggle} filters={filters} />
      </div>
      <div style={{ display: equipmentVisible }}>
        <Equipment toggle={toggle} filters={filters} />
      </div>
      <div style={{ display: infoVisible }}>
        <Info toggle={toggle} filters={filters} />
      </div>
    </div>
  );
}

export default Container
