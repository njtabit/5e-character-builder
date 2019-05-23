import React from 'react'
import * as strFunc from '../functions/strings'

import useStore from '../state/store/useStore'

const Infobox = () => {

/*
  // First pass just created divs for everything in the race object
  const toList = (info) => {

    const parseObj = (obj) => {

      let list = []
      for (const key in obj) {
        list.push( <div key={ key } className={ key } ><span>{ key }: </span><span>{ toList(obj[key]) } </span></div> )
      }
      return list
    }

    const parseArr = (arr) => {
      let list = []

      for (let i = 0; i < arr.length; i++) {
        list.push( toList(arr[i]) )
      }
      return list
    }

    if (typeof info === 'string') { return info } else if (Array.isArray(info)) { return parseArr(info) } else if (typeof info === 'object') { return parseObj(info) } else { return info }
  }
*/

/*
  // Second pass wanted to make a universal infobox component that read from different props based on page
  const raceProps = ['name', 'speed', 'size', 'ability', 'darkvision']
*/

  // Third pass involves unique infoboxes for each page, may end up getting integrated into the page components themselves
  const spreadObj = (obj, keyAdd = '', valAdd = '') => {
    for (const key in obj) {
      box.push(<p>{ strFunc.capitalize(key) + keyAdd }: { obj[key] + valAdd }</p>)
    }
  }

  const race = useStore( state => state.miscReducer.infobox, {} )
  const box = []

  if (race) {

    if (race.name) box.push(<h1 className="boxTitle">{ race.name }</h1>)

    if (typeof race.speed === 'number') {
      box.push(<p>Speed: { race.speed } </p>)
    } else if (typeof race.speed === 'object') {
      spreadObj(race.speed, ' speed', ' ft')
    }

    if (race.size) box.push(<p>Size: { race.size } </p>)

    if (race.ability) spreadObj(race.ability)

    if (race.darkvision) box.push(<p>Darkvision: { race.darkvision } </p>)
  }

  return <div className="infobox">{ box }</div>
}

export default Infobox
