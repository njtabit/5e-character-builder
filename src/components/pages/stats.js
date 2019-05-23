import React from 'react'
import useStore from '../../state/store/useStore'

const Stats = () => {
  const race = useStore(state => state.charReducer.race, false)
  console.log('stats page', race, typeof race)

  let stats
  if (typeof race === 'object') {
    stats = Object.keys(race.ability).map( (k, i, stat) => {
      stat = k + ': ' + race.ability[k]
      return stat
    })
  }

  return <p>{ stats }</p>
}
export default Stats
