import React from 'react'
import Rdom from 'react-dom'
import Root from './root'
import { Provider } from 'react-redux'
import store from './state/store'
import './index.scss'

Rdom.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
