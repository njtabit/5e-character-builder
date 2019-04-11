import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tab from './components/tab'
import Container from './components/container'
import { src } from './lists/sources'

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {tab: 'Race', //'Home' //Home should be default, anything else is for dev purposes
      filters: {
        PS: 'active',
        UA: 'active'
      }
    }
    Object.keys(src).map((source) => { this.state.filters[source] = 'active' })

    // The list of tabs to display across the top of the page
    this.tabs = ['Home', 'Race', 'Class', 'Background', 'Stats', 'Feats', 'Proficiencies', 'Misc', 'Spells', 'Equipment', 'Info']
  }

  changeTabs = (name) => {
    this.setState({ tab: name })
  }

  // Checks what the current filter status is before cycling it.  If the status is 'exclusive' or toggled off of 'exclusive', change that state as well.
  filterToggle = (source) => {
    const status = this.state.filters[source]
    if (status === 'active') {
      this.setState(
        (prevState) => ({
          filters: {
            ...prevState.filters,
            [source]: 'inactive'
          }
        })
      )
    } else if (status === 'inactive') {
      this.setState(
        (prevState) => ({
          filters: {
            ...prevState.filters,
            [source]: 'exclusive',
            exclusives: true
          }
        })
      )
    } else {
      this.setState(
        (prevState) => ({
          filters: {
            ...prevState.filters,
            [source]: 'active',
          }
        }),
        () => {
          if (!Object.values(this.state.filters).includes('exclusive')) {
            this.setState(
              (prevState) => ({
                filters: {
                  ...prevState.filters,
                  exclusives: false
                }
              })
            )
          }
        }
      )
    }
  }

  // Cycles through the tabs array and creates a Tab component for each, then adds the Container
  renderApp = () => {
    const app =
      <div id="wrapper">
        <nav id="nav-tabs">
          {
            this.tabs.map( (name, i) => {
              return <Tab name={ name } clickHandler={ this.changeTabs } activeTab={ this.state.tab } />
            })
          }
        </nav>

        <div id="app-container">
          <Container contents={this.state.tab} toggle={this.filterToggle} filters={this.state.filters} />
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
