import React, { Component } from 'react'

const Tabs = () => {
  const newTab = (name, ...classes) => {
    const classnames = classes.join(' ')
    return (<span id={name.toLowerCase() + '-tab'} className={classnames + ' tab'} onClick={handleClick} >{name}</span>)
  }

  const handleClick = (e) => {
    console.log(e)
    console.log(e.target.id)
    Root.props.switchTabs()
  }

  const tabset =
    <nav id="nav-tabs">
     {newTab('Home', 'lefttab')}
     {newTab('Race')}
     {newTab('Class')}
     {newTab('Background')}
     {newTab('Stats')}
     {newTab('Feats')}
     {newTab('Proficiencies')}
     {newTab('Misc')}
     {newTab('Spells')}
     {newTab('Equipment')}
     {newTab('Info', 'righttab')}
    </nav>

  return tabset
}

export {Tabs}
