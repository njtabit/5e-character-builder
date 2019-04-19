import React from 'react'

export default (props) => {
  return <span id={props.name.toLowerCase() + '-tab'} className={'tab' + (props.activeTab === props.name?' activetab':'')} onClick={(e) => props.clickHandler(props.name)} >{props.name}</span>
}
