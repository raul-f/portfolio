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
                        ? `Como desenvolvedor, essa é a minha filosofia: ter um site com design bem-feito, usável, intuitivo de se navegar - e agradável - é tão importante quanto ter um site funcional.`
                        : `As a developer, that's my core philosophy: having your site
                    be well-designed, usable, intuitive to navigate - and feel
                    good - is just as important as it working properly.`}
                </p>
                <p className="about-text">
                    {props.language === "pt-BR"
                        ? `Eu sou um desenvolvedor front-end de 21 anos morando em São Paulo, Brasil. Além de design e programação, eu amo gatos, pássaros, crianças, videogames com histórias interessantes e moda. Além disso, sou um grande fã de design bicolor de alto contraste - preto e branco em particular.`
                        : `I'm a 21-year-old front-end web developer based in São Paulo, Brasil. Besides design and coding, I love cats, birds, kids, story-driven video games and fashion. Also, I'm a big fan of high-contrast, well-balanced two-color design - black and white design in particular.` /*I have ADHD, and my friends say that most of the time my behavior is between that of a cat and a kid - but I'm always hyperfocused when designing or coding.*/}
                </p>
                <p className="about-text">
                    {props.language === "pt-BR"
                        ? `Eu tenho confiança na minha habilidade para trabalhar com CSS, SASS, HTML,
						JavaScript e React.js. Além disso tenho um conhecimento básico de UX/UI, sou versado em Node.js, usuário prolífico de Git e do Github, e também sei trabalhar com D3.js.`
                        : `I should say that I have confidence in my CSS, SASS, HTML, JavaScript and React.js skills. I also have some basic knowledge of UX/UI, am well-versed in Node.js, a prolific user of Git and Github, and I can work with D3.js, too.`}
                </p>
            </article>
        </div>
    )
}

export default AboutRight
