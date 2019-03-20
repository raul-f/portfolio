import React from "react"

const AboutRight = props => {
    return (
        <div className="about-right">
            <article className="about-article">
                <h2 className="about-title">
                    {props.language === "pt-BR"
                        ? "A forma é a função"
                        : "Form equals function"}
                    .
                </h2>
                <p className="about-text">
                    {props.language === "pt-BR"
                        ? `Como desenvolvedor, essa é a minha filosofia: ter um site com design bem-feito, usável, intuitivo de se navegar, que funciona como esperado - e é agradável - são partes igualmente importantes da experiência do usuário.`
                        : `As a developer, that's my core philosophy: having your site be well-designed, usable, intuitive to navigate, work properly - and feel good - are all equally important parts of the user's experience.`}
                </p>
                <p className="about-text">
                    {props.language === "pt-BR"
                        ? `Eu sou um web designer e desenvolvedor front-end de 21 anos morando em São Paulo, Brasil, que se sente confortável trabalhando com CSS, SASS, HTML,
						JavaScript e React.js. Tenho um conhecimento básico de UX/UI, sou versado em Node.js, usuário prolífico de Git e do Github, e também sei trabalhar com D3.js.`
                        : `I'm a 21-year-old front-end web developer based in São Paulo, Brazil, who feels most comfortable working with CSS, SASS, HTML, JavaScript and React.js. I have some knowledge of UX/UI, am well-versed in Node.js, a prolific user of Git and Github, and I can work with D3.js, too.` /*I have ADHD, and my friends say that most of the time my behavior is between that of a cat and a kid - but I'm always hyperfocused when designing or coding.*/}
                </p>
                <p className="about-text">
                    {props.language === "pt-BR"
                        ? `Além de design e programação, eu amo gatos, pássaros, crianças, videogames com histórias interessantes e moda. Além disso, sou um grande fã de design bicolor de alto contraste - preto e branco em particular.`
                        : `Besides design and coding, I love cats, birds, kids, story-driven video games and fashion. Also, I'm a big fan of high-contrast, well-balanced two-colour design - black and white design in particular.`}
                </p>
            </article>
        </div>
    )
}

export default AboutRight
