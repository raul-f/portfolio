import React from 'react'
import FilterInfo from './filter/FilterInfo'
import FilterMenu from './filter/FilterMenu'

const Filter = props => {
  return (
    <div className="filter">
      <FilterInfo selected={props.selected} active={props.active} language={props.language} />
      <FilterMenu
        selected={props.selected}
        change={props.changeFilter}
        preview={props.previewFilter}
        language={props.language}
      />
    </div>
  )
}

export default Filter
