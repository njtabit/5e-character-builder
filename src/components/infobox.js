import React from 'react'

export default (props) => {
  return <div className="infobox">{ props.viewing ? props.viewing.name : 'Infobox' }</div>
}
