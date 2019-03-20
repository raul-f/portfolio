import React from 'react'
import DisplayProject from './display/DisplayProject'
import DisplayMenu from './display/DisplayMenu'

const Display = props => {
  return (
    <div className="display">
      <DisplayProject active={props.active} language={props.language} />
      <DisplayMenu
        set={props.set}
        selected={props.selected}
        change={props.changeProject}
        preview={props.previewProject}
        language={props.language}
      />
    </div>
  )
}

export default Display
