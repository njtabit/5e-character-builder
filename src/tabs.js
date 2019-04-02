import React, { Component } from 'react'

class Tabs extends Component {
  constructor() {
    super()
    this.state = {tab: 'Home'}

    this.tabset =
      <nav id="nav-tabs">
       {this.newTab('Home', 'lefttab')}
       {this.newTab('Race')}
       {this.newTab('Class')}
       {this.newTab('Background')}
       {this.newTab('Stats')}
       {this.newTab('Feats')}
       {this.newTab('Proficiencies')}
       {this.newTab('Misc')}
       {this.newTab('Spells')}
       {this.newTab('Equipment')}
       {this.newTab('Info', 'righttab')}
      </nav>
  }

  newTab(name, ...classes) {
    const classnames = classes.join(' ')
    return (<span id={name.toLowerCase() + '-tab'} className={classnames + ' tab'} onClick={this.handleClick} >{name}</span>)
  }

  handleClick(e) {
    console.log(e)
    console.log(e.target.id)
    Root.props.switchTabs()
  }

  render() {
    return this.tabset
  }
}

export {Tabs}
