import React, { useState } from 'react'
import { src } from '../lists/sources.json'

const Filters = (props) => {
  const [active, setActive] = useState([])

  return <div className="filters">
    <div className="source-type-filters">
      <div className="filter-option">Plane Shift</div>
      <div className="filter-option">Unearthed Arcana</div>
    </div>
    <div className="source-books">
      {props.srclist.map((source, i) => {
        return <div key={'src' + i} className="filter-option">{src[source]}</div>
      })}
    </div>
  </div>
}

export default Filters
