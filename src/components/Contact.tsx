import React from 'react'

import Navbar from './Navbar'
import Logo from './Logo'
import Info from './contact/Info'
import Adresses from './contact/Adresses'
import Copyright from './contact/Copyright'
import Watermark from './Watermark'
import LinkBox from './LinkBox'

const Contact = props => {
  return (
    <div className="contact">
      <Navbar language={props.language} />
      <Logo />
      <div className={props.language === 'pt-BR' ? 'content portuguese' : 'content'}>
        <Info language={props.language} />
        <Adresses language={props.language} />
      </div>
      <Copyright language={props.language} />
      <Watermark language={props.language} page="contact" />
      <LinkBox />
      <div className="mobile-footer" />
    </div>
  )
}

export default Contact
