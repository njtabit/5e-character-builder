// dependencies
import React from 'react'
import Rdom from 'react-dom'
import Store from './state/store/store'
import reducer from './state/reducers/reducer'

// components
import Root from './components/root'

// styles
import './scss/index.scss'

Rdom.render(
  <Store reducer={reducer} log={true}>
    <Root />
  </Store>,
  document.getElementById('root')
)
