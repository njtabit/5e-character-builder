import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tab from './components/tab'
import Container from './components/container'
import { src } from './lists/sources'

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {tab: 'Race', //'Home' //Home should be default, anything else is for dev purposes
      filters: { // 0 = 'inactive', 1 = 'active' //, 2 = 'exclusive'
        MISC: true,
        PS: true,
        UA: true
      }
    }
    Object.keys(src).map((source) => { this.state.filters[source] = true })

    // The list of tabs to display across the top of the page
    this.tabs = ['Home', 'Race', 'Class', 'Background', 'Stats', 'Feats', 'Proficiencies', 'Misc', 'Spells', 'Equipment', 'Info']
  }

  changeTabs = (name) => {
    this.setState({ tab: name })
  }

  // Checks what the current filter status is before cycling it.  If the status is 'exclusive' or toggled off of 'exclusive', change that state as well.
  filterToggle = (source) => {
    this.setState(
      (prevState) => ({
        filters: {
          ...prevState.filters,
          [source]: !prevState.filters[source]
        }
      })
    )

    //Content removed due to simplification of toggle system.  May be added back in if 'exclusive' state reenters.
    /* if (status === 0) {
      this.setState(
        (prevState) => ({
          filters: {
            ...prevState.filters,
            [source]: 1
          }
        })
      )
    } else if (status === 1) {
      this.setState(
        (prevState) => ({
          filters: {
            ...prevState.filters,
            [source]: 2,
            exclusives: true
          }
        })
      )
    } else {
      this.setState(
        (prevState) => ({
          filters: {
            ...prevState.filters,
            [source]: 0
          }
        }),
        () => {
          if (!Object.values(this.state.filters).includes(2)) {
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
    } */
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
