import React from "react"
import { Link } from "react-router-dom"

// <Language /> component

const Language = props => {
    return (
        <div className="language">
            <h1>
                Choose your language<span className="gray-text">.</span>
            </h1>
            <div className="lang-options">
                <Link
                    to="/home"
                    className="lang-link"
                    id="pt_BR"
                    onClick={props.changeLanguage}
                    title="Português Brasileiro"
                >
                    <img
                        src="https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/svg-icons/brazil-flag.svg"
                        alt="A bandeira brasileira. Clique para ter acesso ao site em português."
                    />
                </Link>
                <Link
                    to="/home"
                    className="lang-link"
                    id="en_US"
                    onClick={props.changeLanguage}
                    title="American English"
                >
                    <img
                        src="https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/svg-icons/usa-flag.svg"
                        alt="The american flag. Click to access the site in english."
                    />
                </Link>
            </div>
            <h1>
                Escolha seu idioma<span className="gray-text">.</span>
            </h1>
        </div>
    )
}

export default Language
