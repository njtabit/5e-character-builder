import React from 'react'
import PropTypes from 'prop-types'
import Toggle from './toggle'
import { src } from '../lists/sources'

import useDispatch from '../state/store/useDispatch'
import useStore from '../state/store/useStore'

import setFilters from '../state/actions/setFilters'

const Filters = (props) => {
  let srcBlock = []
  let seriesBlock = []

  const dispatch = useDispatch()
  const filter = useStore( state => state.miscReducer.filters, {})
  console.log('filters', filter)

  props.srclist.map( (source) => {
    const toggle = () => {
      const newFilter = {
        ...filter,
        [source]: !filter[source]
      }
      setFilters(newFilter, dispatch)
    }

    srcBlock.push(<Toggle name={ src[source].name } key={ source } active={ (filter[src[source].series] && filter[source]) } abbr={ source } toggle={ toggle } series={src[source].series} />)

    if (!seriesBlock.includes(src[source].series)) { seriesBlock.push(src[source].series) }
  })

  seriesBlock.map( (series, i) => {
    const toggle = () => {
      const newFilter = {
        ...filter,
        [series]: !filter[series]
      }
      setFilters(newFilter, dispatch)
    }

    seriesBlock[i] = <Toggle name={src[series].name} key={series} active={filter[series]} abbr={series} toggle={toggle} series="self" />
  })

  return <div className="filters">
    <div className="source-type-filters">
      { seriesBlock }
    </div>
    <div className={'source-books PS' + filter['PS'] + ' UA' + filter['UA'] + ' AL' + filter['AL'] + ' SOCIAL' + filter['SOCIAL'] + ' MISC' + filter['MISC']} >
      { srcBlock }
    </div>
  </div>
}

Filters.propTypes = {
  srclist: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired
}

export default Filters
