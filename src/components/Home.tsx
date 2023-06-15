import Navbar from "./Navbar";
import TypedIntro from "./home/TypedIntro";
import LinkBox from "./LinkBox";

// <Home /> component

interface HomeProps {
  language: string;
}

const Home = (props: HomeProps) => (
  <div className="home" id="home">
    <div className="bg-filter" />
    <Navbar language={props.language} />
    <TypedIntro language={props.language} />
    <LinkBox />
    <div className="mobile-footer" />
  </div>
);

export default Home;
