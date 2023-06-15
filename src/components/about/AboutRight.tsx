import moment from "moment";

interface AboutRightProps {
  language: string;
}

function AboutRight(props: AboutRightProps) {
  const idade = moment().diff(moment([1997, 10, 22]), "years");
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
          {
            props.language === "pt-BR"
              ? `Eu sou um web designer e desenvolvedor de ${idade} anos morando em São Paulo, Brasil, que se sente confortável trabalhando com React, Node.js e bancos de dados SQL. Tenho um conhecimento básico de UX/UI, sou versado em CSS, SASS, HTML e
						JavaScript, usuário prolífico de Git e do Github, e também sei trabalhar com .NET Core e bancos de dados NoSQL.`
              : `I'm a ${idade}-year-old web developer based in São Paulo, Brazil, who feels most comfortable working with React, Node.js and SQL databases. I have some knowledge of UX/UI, am well-versed in CSS, SASS, HTML and JavaScript, a prolific user of Git and Github, and I can work with .NET Core and NoSQL databases, too.` /*I have ADHD, and my friends say that most of the time my behavior is between that of a cat and a kid - but I'm always hyperfocused when designing or coding.*/
          }
        </p>
        <p className="about-text">
          {props.language === "pt-BR"
            ? `Além de design e programação, eu amo gatos, pássaros, cinema, videogames com histórias interessantes e moda. Além disso, sou um grande fã de design bicolor de alto contraste - preto e branco em particular.`
            : `Besides design and coding, I love cats, birds, films, story-driven video games and fashion. Also, I'm a big fan of high-contrast, well-balanced two-colour design - black and white design in particular.`}
        </p>
      </article>
    </div>
  );
}

export default AboutRight;
