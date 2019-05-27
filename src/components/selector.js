import React from 'react'
import PropTypes from 'prop-types'
import { src } from '../lists/sources.json'

import useStore from '../state/store/useStore'


const Selector = (props) => {
  const filter = useStore ( store => store.miscReducer.filters, {})

  return <div className={ 'select-box ' + props.source + ' ' + (filter[src[props.source].series] && filter[props.source]?'active':'inactive') + (props.selected ? ' selected' : '') } onClick={ () => { props.select({name: props.name, index: props.index}) } } > { props.name } </div>
}

Selector.propTypes = {
  source: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  select: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default Selector
