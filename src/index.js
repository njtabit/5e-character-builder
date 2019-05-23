// dependencies
import React from 'react'
import Rdom from 'react-dom'
import Store from './state/store/store'
import rootReducer from './state/store/rootReducer'

// components
import Root from './components/root'

// styles
import './scss/index.scss'

Rdom.render(
  <Store reducer={rootReducer} log={true}>
    <Root />
  </Store>,
  document.getElementById('root')
)
