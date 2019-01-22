import React from "react"

const ScrollBtn = props => {
    // console.log(props)
    return (
        <button
            style={props.style}
            type="button"
            className="scroll-btn"
            onClick={event => props.update(event)}
        >
            <i className="fas fa-arrow-down" />
        </button>
    )
}

export default ScrollBtn
