import React from 'react'

export default (props) => {

  return <div className={ 'filter-option' + ' ' + (props.active?'active':'inactive') + ' ' + props.series } onClick={ (e) => props.toggle(props.abbr) } > { props.name } </div>

}
