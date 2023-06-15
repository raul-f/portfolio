import { useState } from "react";
import "./main.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Language from "./components/Language";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MobileMenu from "./components/MobileMenu";
import TabletPlaceholder from "./components/TabletPlaceholder";

// <App /> component

function App() {
  const [language, setLanguage] = useState("pt-BR");
  const [status, setStatus] = useState(false);

  function changeLanguage(event: React.MouseEvent): void {
    if (window.innerWidth < 500) {
      document.documentElement.requestFullscreen();
    }
    const target = event.target as HTMLAnchorElement;
    setLanguage(() => target.id);
    setStatus(() => true);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: status ? (
        <div>
          <TabletPlaceholder language={language} />
          <MobileMenu language={language} />
          <Home language={language} />
        </div>
      ) : (
        <Language changeLanguage={changeLanguage} page="/" />
      ),
    },
    {
      path: "/about",
      element: status ? (
        <div>
          <TabletPlaceholder language={language} />
          <MobileMenu language={language} />
          <About language={language} />
        </div>
      ) : (
        <Language changeLanguage={changeLanguage} page="/about" />
      ),
    },
    {
      path: "/projects",
      element: status ? (
        <div>
          <TabletPlaceholder language={language} />
          <MobileMenu language={language} />
          <Projects language={language} />
        </div>
      ) : (
        <Language changeLanguage={changeLanguage} page="/projects" />
      ),
    },
    {
      path: "/contact",
      element: status ? (
        <div>
          <TabletPlaceholder language={language} />
          <MobileMenu language={language} />
          <Contact language={language} />
        </div>
      ) : (
        <Language changeLanguage={changeLanguage} page="/contact" />
      ),
    },
  ]);

  return (
    <div id="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
