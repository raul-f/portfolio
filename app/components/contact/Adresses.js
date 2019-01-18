import React from "react"

const Adresses = () => {
    return (
        <ul className="addresses">
            <li className="address-item">
                <p className="address-text">
                    <i className="fas fa-envelope address-icon" />
                    raulf.dev@gmail.com
                </p>
            </li>
            <li className="address-item">
                <p className="address-text">
                    <i className="fas fa-phone fa-flip-horizontal address-icon" />
                    +55 (11) 98104-1711
                </p>
            </li>
            <li className="address-item">
                <p className="address-text">
                    <i className="fab fa-twitter address-icon" />
                    @raulf_dev
                </p>
            </li>
        </ul>
    )
}

export default Adresses
