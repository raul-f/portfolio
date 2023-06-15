interface WatermarkProps {
  language: string;
  page: string;
}

const Watermark = (props: WatermarkProps) => (
  <h2 className="watermark">
    {props.language === "pt-BR"
      ? props.page === "about"
        ? "Sobre"
        : props.page === "projects"
        ? "Projetos"
        : "Contato"
      : props.page === "about"
      ? "About"
      : props.page === "projects"
      ? "Projects"
      : "Contact"}
    .
  </h2>
);

export default Watermark;
