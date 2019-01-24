import React from "react"

const TabletPlaceholder = props => {
    return (
        <div className="tablet-placeholder">
            <h1>
                {props.language === "pt-BR" ? "Desculpa" : "Sorry"},<br />
                {props.language === "pt-BR"
                    ? "não tem uma versão para tablet (ainda)."
                    : "there is no tablet version (yet)."}
            </h1>
            <p>
                {props.language === "pt-BR"
                    ? "Veja o site no computador ou no celular!"
                    : "Check this website on desktop or mobile!"}
            </p>
        </div>
    )
}

export default TabletPlaceholder