import { Link } from "react-router-dom";

interface NavbarProps {
  language: string;
}

const Navbar = (props: NavbarProps) => (
  <nav className="navbar">
    <Link id="about-link" className="navlink" to="/about">
      {props.language === "pt-BR" ? "Sobre" : "About"}
      <span className="gray-point">.</span>
    </Link>
    <Link id="project-link" className="navlink" to="/projects">
      {props.language === "pt-BR" ? "Projetos" : "Projects"}
      <span className="gray-point">.</span>
    </Link>
    <Link id="contact-link" className="navlink" to="/contact">
      {props.language === "pt-BR" ? "Contato" : "Contact"}
      <span className="gray-point">.</span>
    </Link>
  </nav>
);

export default Navbar;
