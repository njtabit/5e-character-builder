import React from 'react'
import PropTypes from 'prop-types'
import { src } from '../lists/sources.json'


const Selector = (props) => {
  return <div className={ 'select-box ' + props.source + ' ' + (props.filters[src[props.source].series] && props.filters[props.source]?'active':'inactive') + (props.selected ? ' selected' : '') } onClick={ () => { props.select({name: props.name, index: props.index}) } } > { props.name } </div>
}

Selector.propTypes = {
  filters: PropTypes.object.isRequired,
  source: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  select: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default Selector
