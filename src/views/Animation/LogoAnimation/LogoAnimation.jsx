import React, { useEffect, useState, useRef } from "react";
import { StyledLogo, LogoWrapper } from "./LogoAnimation.styles";

function LogoAnimation(props) {
  const elemCoordinates = props.element.current?.getBoundingClientRect() || {};
  const [state, setState] = useState({ top: 0, left: 0, frame: props.frame });
  const duration = 1300;
  let initialLeft;
  let initialTop;
  const element = useRef(null);

  useEffect(() => {
    console.log(props.frame);
    initialLeft = window.innerWidth / 2 - element.current?.offsetWidth / 2;
    initialTop = window.innerHeight / 2 - element.current?.offsetHeight / 2;

    setState({ ...state, top: initialTop, left: initialLeft });
  }, [initialLeft, initialTop]);

  const variants = {
    visible: {},
    hidden: {
      top: elemCoordinates.top,
      left: elemCoordinates.left,
      width: 88,
    },
  };

  function handleClick() {
    setState({ ...state, frame: 2 });
    setTimeout(() => {
      props.changeFrame(2);
    }, duration);
  }

  return props.frame == 1 ? (
    <LogoWrapper
      ref={element}
      animate={state.frame === 1 ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: duration / 1000 }}
      coords={{ top: state.top, left: state.left }}
    >
      <StyledLogo onClick={handleClick} />
    </LogoWrapper>
  ) : null;
}
export { LogoAnimation };
