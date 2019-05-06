import React, { useReducer, useEffect } from 'react'
import { publish } from './storeHelpers'
import DispatchContext from './dispatchContext'
import PropTypes from 'prop-types'

let globalDispatch

// for debugging
function logAndDispatch(action) {
  // eslint-disable-next-line
  console.log('Action: ', action)
  return globalDispatch(action)
}

// Store component
const Store = (props) => {
  const initialState = props.reducer(props.initialValue || {}, { type: '__INIT__'})
  const [state, dispatch] = useReducer(props.reducer, initialState)

  // for debugging
  useEffect( () => {
    if (props.log) {
      // eslint-disable-next-lne
      console.log('State: ', state)
    }
    publish(state)
  }, [state])

  globalDispatch = dispatch

  return (
    <DispatchContext.Provider value={props.log ? logAndDispatch : dispatch}>
      {props.children}
    </DispatchContext.Provider>
  )
}

Store.propTypes = {
  reducer: PropTypes.func.isRequired,
  initialValue: PropTypes.any,
  log: PropTypes.bool,
  children: PropTypes.element.isRequired
}

export default Store
