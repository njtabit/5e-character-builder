import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tab from './components/tab'
import Container from './components/container'

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {tab: 'Home'}
  }

  changeTabs = (name) => {
    this.setState({ tab: name })
  }

  renderApp = () => {
    const app =
      <div id="wrapper">
        <nav id="nav-tabs">
         <Tab name="Home" clickHandler={this.changeTabs} activeTab={this.state.tab} />
         <Tab name="Race" clickHandler={this.changeTabs} activeTab={this.state.tab} />
         <Tab name="Class" clickHandler={this.changeTabs} activeTab={this.state.tab} />
         <Tab name="Background" clickHandler={this.changeTabs} activeTab={this.state.tab} />
         <Tab name="Stats" clickHandler={this.changeTabs} activeTab={this.state.tab} />
         <Tab name="Feats" clickHandler={this.changeTabs} activeTab={this.state.tab} />
         <Tab name="Proficiencies" clickHandler={this.changeTabs} activeTab={this.state.tab} />
         <Tab name="Misc" clickHandler={this.changeTabs} activeTab={this.state.tab} />
         <Tab name="Spells" clickHandler={this.changeTabs} activeTab={this.state.tab} />
         <Tab name="Equipment" clickHandler={this.changeTabs} activeTab={this.state.tab} />
         <Tab name="Info" clickHandler={this.changeTabs} activeTab={this.state.tab} />
        </nav>

        <div id="app-container">
          <Container contents={this.state.tab} />

        </div>

      </div>
    return(app)
  }

  render() {
    return (
      this.renderApp()
    )
  }
}

const mapStateToProps = (state) => ({
  tab: state.app.tab
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
