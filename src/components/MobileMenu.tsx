import { useState, useEffect } from "react";
import anime from "animejs";

import Logo from "./Logo";
import Navbox from "./mobilemenu/Navbox";
import LinkBox from "./LinkBox";

interface MobileMenuProps {
  language: string;
}

function MobileMenu(props: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [animating, setAnimating] = useState(false);

  const toggleMenu = () => {
    setOpen((open) => !open);
    setAnimating(true);
  };

  const closeMenu = () => {
    setOpen(false);
    setAnimating(true);
  };

  useEffect(() => {
    if (animating) {
      if (!open) {
        anime({
          targets: ".mobile-menu",
          height:
            window.visualViewport === null
              ? 0
              : (70 / 640) * window.visualViewport.height,
          easing: "easeInOutQuart",
          duration: 200,
        }).finished.then(() => {
          setAnimating(false);
        });
      } else {
        document.documentElement.requestFullscreen();
        anime({
          targets: ".mobile-menu",
          height:
            window.visualViewport === null
              ? 100
              : window.visualViewport.height + 100,
          easing: "easeInOutQuart",
          duration: 200,
        }).finished.then(() => {
          setAnimating(false);
        });
      }
    }
  }, [animating, open]);

  return (
    <div id="mobile-menu" className="mobile-menu">
      <Logo />
      <button className="menu-btn" onClick={toggleMenu}>
        {open ? <i className="fas fa-times" /> : <i className="fas fa-bars" />}
      </button>
      <Navbox language={props.language} closeMenu={closeMenu} />
      <LinkBox />
    </div>
  );
}

export default MobileMenu;
