import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypedIntroProps {
  language: string;
}

function TypedIntro(props: TypedIntroProps) {
  const intro = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        props.language === "pt-BR"
          ? "<h1 class='intro-text'>Ol&aacute;.<br> ^500 Meu nome é</span> <span class='mobile-hand'><span class='white-text'>Raul Figueiredo</span>,</span> ^350 e eu sou um <span class='mobile-hand'><span class='white-text'>web developer</span>.</span></h1>"
          : "<h1 class='intro-text'>Hello.<br> ^500 My name is <span class='mobile-hand'><span class='white-text'>Raul Figueiredo</span>,</span> ^350 and I am a <span class='mobile-hand'><span class='white-text'>web developer</span>.</span></h1>",
      ],
      typeSpeed: 40,
      showCursor: false,
    };
    const typed = new Typed(intro.current, options);

    return () => {
      typed.destroy();
    };
  });

  return (
    <div className="intro-box">
      <span id="hello" ref={intro} />
    </div>
  );
}

/*
const Intro = () => {
	return(
		<div id='intro-box'>
			<h1 className='intro-text'>Hello.</h1>
			<h1 className='intro-text'>My name is <span className='white-text'>Raul Figueiredo</span>, and I am a <span className='white-text'>web developer</span>.</h1>
		</div>
	)
}
*/

export default TypedIntro;
