import React from 'react'
import PropTypes from 'prop-types'

const Tab = (props) => {
  return <span id={props.name.toLowerCase() + '-tab'} className={'tab' + (props.activeTab === props.name?' activetab':'')} onClick={() => props.clickHandler(props.name)} >{props.name}</span>
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
}

export default Tab
