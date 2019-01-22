import React from "react"

const LinkBox = () => {
    return (
        <div className="link-box">
            <a href="https://github.com/raul-f" target="_blank">
                <i class="fab fa-github link-icon" />
            </a>
            <a
                href="https://www.linkedin.com/in/raul-oliveira-963971106/"
                target="_blank"
            >
                <i class="fab fa-linkedin link-icon" />
            </a>
            <a href="https://codepen.io/raul-f/" target="_blank">
                <i class="fab fa-codepen link-icon" />
            </a>
        </div>
    )
}

export default LinkBox
