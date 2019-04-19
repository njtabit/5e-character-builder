import React, { useState } from 'react'
import { src } from '../lists/sources.json'


export default (props) => {
  return <div className={ 'select-box ' + props.source + ' ' + (props.filters[src[props.source].series] && props.filters[props.source]?'active':'inactive') } onClick={ () => { props.select({name: props.name, index: props.index}) } } > { props.name } </div>
}
