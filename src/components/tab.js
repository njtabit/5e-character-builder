import React from 'react'
import PropTypes from 'prop-types'
import useDispatch from '../state/store/useDispatch'
import setTab from '../state/actions/setTab'

const Tab = (props) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    setTab(props.name, dispatch)
  }

  return <span id={props.name.toLowerCase() + '-tab'} className={'tab' + (props.activeTab === props.name?' activetab':'')} onClick={handleClick} >{props.name}</span>
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired
}

export default Tab
