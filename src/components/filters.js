import React, { useState } from 'react'
import Toggle from './toggle'
import { src } from '../lists/sources.json'

export default (props) => {

  return <div className="filters">
    <div className="source-type-filters">
      <Toggle name="Plane Shift" active={props.filters['PS']} abbr="PS" toggle={props.toggle} />
      <Toggle name="Unearthed Arcana" active={props.filters['UA']} abbr="UA" toggle={props.toggle} />
    </div>
    <div className={'source-books PS' + props.filters['PS'] + ' UA' + props.filters['UA']} >
      {
        props.srclist.map( (source, i) => {
          return <Toggle name={ src[source].name } active={ (props.filters[src[source].series] && props.filters[source]) } abbr={ source } toggle={ props.toggle } series={src[source].series} />
        })
      }
    </div>
  </div>
}
