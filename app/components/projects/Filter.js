import React from "react"
import FilterInfo from "./filter/FilterInfo"
import FilterMenu from "./filter/FilterMenu"

const Filter = props => {
    return (
        <div className="filter">
            <FilterInfo selected={props.selected} active={props.active} />
            <FilterMenu
                selected={props.selected}
                change={props.changeFilter}
                preview={props.previewFilter}
            />
        </div>
    )
}

export default Filter
