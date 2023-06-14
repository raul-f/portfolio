import { useState } from "react";
import anime from "animejs";

import Logo from "./Logo";
import Navbox from "./mobilemenu/Navbox";
import LinkBox from "./LinkBox";

const MobileMenu = function (props: { language: string }) {
  const [open, setOpen] = useState(false);
  const [animating, setAnimating] = useState(false);

  const toggleMenu = () => {
    if (!animating) {
      setAnimating(true);
      if (open) {
        anime({
          targets: ".mobile-menu",
          height: (70 / 640) * window.visualViewport.height,
          easing: "easeInOutQuart",
          duration: 300,
        }).finished.then(() => {
          setAnimating(false);
        });
      } else {
        document.documentElement.requestFullscreen();
        anime({
          targets: ".mobile-menu",
          height: window.visualViewport.height + 100,
          easing: "easeInOutQuart",
          duration: 300,
        }).finished.then(() => {
          setAnimating(false);
        });
      }
      setOpen((open) => !open);
    }
  };

  return (
    <div id="mobile-menu" className="mobile-menu">
      <Logo />
      <button className="menu-btn" onClick={toggleMenu}>
        {open ? <i className="fas fa-times" /> : <i className="fas fa-bars" />}
      </button>
      <Navbox language={props.language} />
      <LinkBox />
    </div>
  );
};

export default MobileMenu;
