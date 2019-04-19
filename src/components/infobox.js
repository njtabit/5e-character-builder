import React from 'react'

export default (props) => {
  return <div className="infobox">{ props.list[props.viewing] ? props.list[props.viewing].name : 'Infobox' }</div>
}
