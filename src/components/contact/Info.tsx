import React from 'react'

const Info = props => {
  return (
    <div className="contact-content-info">
      <p className="contact-content-text">
        {props.language === 'pt-BR'
          ? `Sinta-se à vontade para falar comigo! Eu sempre tento responder
                e-mails rapidamente - ligações e mensagens também, mas nesse
                caso posso demorar um pouco.`
          : `Feel free to contact me through any of these! I always try to
                reply e-mails quickly - calls and texts too, though less
                reliably.`}
      </p>
      <p className="contact-content-text">
        {props.language === 'pt-BR'
          ? `No momento estou procurando por uma oportunidade de emprego! 
          Meu objetivo é uma vaga de trabalho em uma startup que ofereça um
					serviço inovador ou inove na oferta de um serviço tradicional,
					diminuindo custos e facilitando a vida do cliente.`
          : `At the moment I am looking for a job opportunity! My goal is a
					position in a startup/tech company that provides an innovative
					service or innovates in the provision of a traditional service,
					cutting costs and making the client's life easier.`}
      </p>
    </div>
  )
}

export default Info
