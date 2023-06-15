interface AdressesProps {
  language: string;
}

const Adresses = (props: AdressesProps) => {
  return (
    <ul
      className={
        props.language === "pt-BR"
          ? "addresses addresses-portuguese"
          : "addresses"
      }
    >
      <li className="address">
        <i className="fas fa-envelope address-icon" />
        <span className="address-text">raulf.dev@gmail.com</span>
      </li>
      <li className="address">
        <i className="fas fa-phone fa-flip-horizontal address-icon" />
        <span className="address-text">+55 (11) 98104-1711</span>
      </li>
      <li className="address">
        <i className="fab fa-twitter address-icon" />
        <span className="address-text">@raulf_dev</span>
      </li>
      <li>
        <a
          href="https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/CV/raul-f-cv.pdf"
          target="_blank"
          download="CV Raul Figueiredo"
          className="address address-link"
        >
          <i className="fas fa-download address-icon" />
          <span className="address-text">
            {props.language === "pt-BR"
              ? " Baixe meu currículo"
              : " Download my CV"}
          </span>
        </a>
      </li>
    </ul>
  );
};

export default Adresses;
