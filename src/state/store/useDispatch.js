import { useContext } from 'react'
import dispatchContext from './dispatchContext'

export default () => {
  return useContext(dispatchContext)
}
