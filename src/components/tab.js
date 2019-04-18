import React from 'react'

export default (props) => {
  const handleClick = () => {
    props.clickHandler(props.name)
  }

  return <span id={props.name.toLowerCase() + '-tab'} className={'tab' + (props.activeTab === props.name?' activetab':'')} onClick={handleClick} >{props.name}</span>
}
