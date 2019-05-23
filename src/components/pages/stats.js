import React from 'react'
import useStore from '../../state/store/useStore'

const Stats = () => {
  const race = useStore(state => state.charReducer.race, false)
  console.log('stats page', race)

  return <p>{'' + race.name}</p>
}

export default Stats
