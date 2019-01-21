import React from "react"

const Adresses = () => {
    return (
        <ul className="addresses">
            <li className="address">
                <i className="fas fa-envelope address-icon" />
                <span className="address-text">raulf.dev@gmail.com</span>
            </li>
            <li className="address">
                <i className="fas fa-phone fa-flip-horizontal address-icon" />
                <span className="address-text">+55 (11) 98104-1711</span>
            </li>
            <li className="address">
                <i className="fab fa-twitter address-icon" />
                <span className="address-text">@raulf_dev</span>
            </li>
        </ul>
    )
}

export default Adresses
