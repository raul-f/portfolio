import React from 'react'

const Copyright = props => (
  <h2
    className={
      props.language === 'pt-BR' ? 'copyright-text portuguese-copyright' : 'copyright-text'
    }
  >
    &copy; {new Date().getFullYear()} Raul Figueiredo.
    <span className="mobile-help">
      {props.language === 'pt-BR' ? ' Todos os direitos reservados' : ' All rights reserved'}
    </span>
    .
  </h2>
)

export default Copyright
