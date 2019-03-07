import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs } from './tabs'
import switchTabs from './state/actions/switchTabs'

class Root extends Component {
  constructor() {
    super()
    this.state = {tab: 'Home'}
  }

  renderApp = () => {
    const app =
      <div id="wrapper">
        <Tabs></Tabs>

        <div id="app-container">
          <p>Welcome to Archibald Eutrecer V's Dungeons & Dragons 5e character builder!  I, the
          aforementioned Archibald, will be your wizard for this sojourn.  If you are new to this
          process I suggest we begin by following the list below from top to bottom, however many
          pieces of the character creation process can be done in any order, so feel free to
          explore at your own pace if you wish!</p>
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

const mapDispatchToProps = {switchTabs}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
