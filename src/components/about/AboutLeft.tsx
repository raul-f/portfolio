import { Link } from "react-router-dom";

const AboutLeft = () => (
  <div className="about-left">
    <Link className="logo" to="/">
      <img
        src="https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolio-assets/profile-pic-2.jpg"
        className="profile-picture"
      />
      <h1 className="logo-name">Raul Figueiredo.</h1>
    </Link>
  </div>
);

export default AboutLeft;
