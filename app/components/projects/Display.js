import React from "react"
import DisplayProject from "./display/DisplayProject"
import DisplayMenu from "./display/DisplayMenu"

const Display = props => {
    return (
        <div className="display">
            <DisplayProject active={props.active} />
            <DisplayMenu
                set={props.set}
                selected={props.selected}
                change={props.changeProject}
                preview={props.previewProject}
            />
        </div>
    )
}

export default Display
