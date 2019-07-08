import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { classes } from '../../lists/class/index.json'
import Filters from '../filters'
import Selector from '../selector'
import Info from '../infobox'
//import * as extras from '../../functions/extras'

import useDispatch from '../../state/store/useDispatch'
import useStore from '../../state/store/useStore'

import setClass from '../../state/actions/character/setClass'
import setInfobox from '../../state/actions/setInfobox'
console.log(classes)

/*
  TODO: Actually repurpose this for classes.
  With so few choices, just have a bar go across the top of the container with
  the different classes and use the rest of the container for information.
*/
const Classes = (props) => {
  //return <div>Class placeholder</div>
  const dispatch = useDispatch()
  const classState = useStore( state => state.charReducer.class, false)
  const [viewing, setViewing] = useState(false)

  let classlist = []
  let srclist = []

  // On first mount, just set values to 0
  useEffect(() => {
    if (!classState) {
      setViewing(0)
      setInfobox(classes[0], dispatch)
      // Once ability for viewing and class to be set separately, maybe remove this line so we don't have a surprising number of Aarakocra characters
      setClass(classes[0], dispatch)
    }
  })

  const selectclass = (r) => {
    setViewing(r.index)
    setInfobox(classes[r.index], dispatch)
    setClass(classes[r.index], dispatch)
  }

  for (let r in classes) {

    /*if (!srclist.includes(r.source)) {
      srclist.push(r.source)
    }*/

    classlist.push(<Selector selected={ viewing === r } source={ classes[r].source } filters={ props.filters } select={ selectclass } key={ 'class' + r } name={ classes[r].name } index={ r } />)
  }
  //extras.fieldTypes(classes)

  return <div>
    //<Filters srclist={srclist} toggle={props.toggle} />
    <Info list={ classes } viewing={ classes[viewing] } />
    <div className={'builder class'}>{classlist}</div>
  </div>
}

Classes.propTypes = {
  toggle: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired
}

export default Classes
