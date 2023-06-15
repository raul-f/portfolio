import React, { useEffect, useState } from "react";
import anime from "animejs";

import Navbar from "./Navbar";
import LinkBox from "./LinkBox";
import Logo from "./Logo";
import Filter from "./projects/Filter";
import Display from "./projects/Display";
import ScrollBtn from "./projects/ScrollBtn";
import Watermark from "./Watermark";
import MobileMenu from "./MobileMenu";

interface ProjectProps {
  language: string;
}

function Projects(props: ProjectProps) {
  const [selectedSet, setSelectedSet] = useState("personal-picks");
  const [activeSet, setActiveSet] = useState("personal-picks");
  const [selectedProject, setSelectedProject] = useState("shortr");
  const [activeProject, setActiveProject] = useState("shortr");
  const [rotate, setRotate] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [start, setStart] = useState(0);

  const settings = {
    targets: ".scroll-btn",
    easing: "easeInOutCubic",
    duration: 450,
  };

  function handleFilterSelection(event: React.MouseEvent) {
    const initProjects = {
      "personal-picks": "shortr",
      "html-css-websites": "tribute-page",
      "single-page-apps": "random-quote-machine",
      "d3js-charts": "bar-chart",
      "full-stack-web-apps": "shortr",
      microservices: "timely",
    };

    const target = event.target as HTMLButtonElement;
    const id = target.id as keyof typeof initProjects;

    if (window.innerWidth < 500 && window.innerHeight < 800) {
      document.documentElement.requestFullscreen();
    }

    window.scrollTo({
      top: 2 * window.innerHeight,
      behavior: "smooth",
    });

    setRotate((prevRotate) => prevRotate + 180);
    setAnimating(true);

    setSelectedSet(id);
    setActiveSet(id);
    setSelectedProject(initProjects[id]);
    setActiveProject(initProjects[id]);
  }

  function handleFilterPreview(event: React.MouseEvent) {
    const target = event.target as HTMLButtonElement;
    switch (event.type) {
      case "mouseover":
        setActiveSet(target.id);
        break;
      default:
        setActiveSet(selectedSet);
        break;
    }
  }

  function handleDisplaySelection(event: React.MouseEvent) {
    const target = event.target as HTMLButtonElement;
    if (window.innerWidth < 500) {
      document.documentElement.requestFullscreen();
    }
    setSelectedProject(target.id);
    setActiveProject(target.id);
  }

  function handleDisplayPreview(event: React.MouseEvent) {
    const target = event.target as HTMLButtonElement;
    switch (event.type) {
      case "mouseover":
        setActiveProject(target.id);
        break;
      default:
        setActiveProject(selectedProject);
        break;
    }
  }

  function handleScrollBtn() {
    if (window.innerWidth < 500) {
      document.documentElement.requestFullscreen();
    }

    if (!animating) {
      if ((rotate / 180) % 2 === 1) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({
          top: 2 * window.innerHeight,
          behavior: "smooth",
        });
      }

      setRotate((prevRotate) => prevRotate + 180);
      setAnimating(true);
    }
  }

  function handleScrolling(e: Event) {
    const event = e as WheelEvent;
    event.preventDefault();
    if (
      event.deltaY > 0 &&
      window.pageYOffset < window.innerHeight &&
      !animating
    ) {
      window.scrollTo({ top: 2 * window.innerHeight, behavior: "smooth" });
      setRotate((prevRotate) => prevRotate + 180);
      setAnimating(true);
    } else if (
      window.pageYOffset >= window.innerHeight &&
      event.deltaY < 0 &&
      !animating
    ) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setRotate((prevRotate) => prevRotate + 180);
      setAnimating(true);
    }
  }

  function handleTouch(e: Event) {
    const event = e as TouchEvent;
    switch (event.type) {
      case "touchstart":
        setStart(event.touches[0].clientY);
        break;
      case "touchmove":
        event.preventDefault();
        if (
          event.touches[0].clientY < start - 5 &&
          !animating &&
          window.pageYOffset < window.innerHeight
        ) {
          window.scrollTo({
            top: 2 * window.innerHeight,
            behavior: "smooth",
          });
          setRotate((prevRotate) => prevRotate + 180);
          setAnimating(true);
        } else if (
          event.touches[0].clientY > start + 5 &&
          !animating &&
          window.pageYOffset >= window.innerHeight
        ) {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          setRotate((prevRotate) => prevRotate + 180);
          setAnimating(true);
        }
    }
  }

  useEffect(() => {
    document.addEventListener("wheel", handleScrolling, {
      passive: false,
    });
    document.addEventListener("touchmove", handleTouch, {
      passive: false,
    });
    document.addEventListener("touchstart", handleTouch, {
      passive: false,
    });

    // if (window.pageYOffset > 0 && window.pageYOffset <= 100 && !animating) {
    //   window.scrollTo({ top: 0, behavior: "auto" });
    // } else if (
    //   window.pageYOffset > 100 &&
    //   window.pageYOffset < window.innerHeight &&
    //   !animating
    // ) {
    //   window.scrollTo({ top: window.innerHeight, behavior: "auto" });
    //   setRotate((prevRotate) => prevRotate + 180);
    //   setAnimating(true);
    // }

    if (animating) {
      anime({
        ...settings,
        rotate: rotate,
      }).finished.then(() => {
        setAnimating(false);
      });
    }

    return () => {
      document.removeEventListener("wheel", handleScrolling);
      document.removeEventListener("touchmove", handleTouch);
      document.removeEventListener("touchstart", handleTouch);
    };
  }, [animating]);

  return (
    <div id="projects" className="projects">
      <img
        src="https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolio-assets/projects-background.jpg"
        className="mobile-background"
      />
      <div className="projects-background" />
      <MobileMenu language={props.language} />
      <Logo />
      <Navbar language={props.language} />
      <div className="content">
        <Filter
          selected={selectedSet}
          active={activeSet}
          changeFilter={handleFilterSelection}
          previewFilter={handleFilterPreview}
          language={props.language}
        />
        <Display
          set={selectedSet}
          selected={selectedProject}
          active={activeProject}
          changeProject={handleDisplaySelection}
          previewProject={handleDisplayPreview}
          language={props.language}
        />
      </div>
      <ScrollBtn update={handleScrollBtn} />
      <Watermark language={props.language} page="projects" />
      <LinkBox />
      <div className="mobile-footer" />
    </div>
  );
}

export default Projects;
