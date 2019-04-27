import React from 'react'
import PropTypes from 'prop-types'

const Toggle = (props) => {

  return <div className={ 'filter-option' + ' ' + (props.active?'active':'inactive') + ' ' + props.series } onClick={ () => props.toggle(props.abbr) } > { props.name } </div>

}

Toggle.propTypes = {
  active: PropTypes.bool.isRequired,
  series: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  abbr: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Toggle
