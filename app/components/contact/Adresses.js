import React from "react"

const Adresses = () => {
    return (
        <ul className="addresses">
            <li className="address-item">
                <i className="fas fa-envelope address-icon" />
                <p className="address-text">raulf.dev@gmail.com</p>
            </li>
            <li className="address-item">
                <i className="fas fa-phone fa-flip-horizontal address-icon" />
                <p className="address-text">+55 (11) 98104-1711</p>
            </li>
            <li className="address-item">
                <i className="fab fa-twitter address-icon" />
                <p className="address-text">@raulf_dev</p>
            </li>
        </ul>
    )
}

export default Adresses
