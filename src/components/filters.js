import React from 'react'
import PropTypes from 'prop-types'
import Toggle from './toggle'
import { src } from '../lists/sources.json'

const Filters = (props) => {
  let srcBlock = []
  let seriesBlock = []

  props.srclist.map( (source) => {
    srcBlock.push(<Toggle name={ src[source].name } key={ source } active={ (props.filters[src[source].series] && props.filters[source]) } abbr={ source } toggle={ props.toggle } series={src[source].series} />)

    if (!seriesBlock.includes(src[source].series)) { seriesBlock.push(src[source].series) }
  })

  seriesBlock.map( (series, i) => {
    seriesBlock[i] = <Toggle name={src[series].name} key={series} active={props.filters[series]} abbr={series} toggle={props.toggle} series="self" />
  })

  return <div className="filters">
    <div className="source-type-filters">
      { seriesBlock }
    </div>
    <div className={'source-books PS' + props.filters['PS'] + ' UA' + props.filters['UA'] + ' AL' + props.filters['AL'] + ' SOCIAL' + props.filters['SOCIAL'] + ' MISC' + props.filters['MISC']} >
      { srcBlock }
    </div>
  </div>
}

Filters.propTypes = {
  srclist: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired
}

export default Filters
