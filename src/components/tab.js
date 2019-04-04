import React, { Component } from 'react'

class Tab extends Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name)
  }

  render() {
    return <span id={this.props.name.toLowerCase() + '-tab'} className={(this.props.classes?this.props.classes:'') + ' tab' + (this.props.activeTab === this.props.name?' activetab':'')} onClick={this.handleClick} >{this.props.name}</span>
  }
}

export default Tab
