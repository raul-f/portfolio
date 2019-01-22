import React from "react"

const Copyright = props => (
    <h2
        className={
            props.language === "pt-BR"
                ? "copyright-text portuguese"
                : "copyright-text"
        }
    >
        &copy; 2019 Raul Figueiredo.
        {props.language === "pt-BR"
            ? " Todos os direitos reservados"
            : " All rights reserved"}
        .
    </h2>
)

export default Copyright
