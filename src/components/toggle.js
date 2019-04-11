import React from 'react'

const Toggle = (props) => {

  return <div key={ props.abbr } className={ 'filter-option' + ' ' + props.active + ' ' + props.series } onClick={ (e) => props.toggle(props.abbr) } > { props.name } </div>

}

export default Toggle
