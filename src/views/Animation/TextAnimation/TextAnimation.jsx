import { useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  LargeText,
  TextAnimationWrapper,
  WhiteText,
} from "./TextAnimation.styles";
import { motion } from "framer-motion";

export function TextAnimation(props) {
  const controls = useAnimation();
  const whiteTextOpacity = useAnimation();
  const moveText = useAnimation();

  const [elementCoords, setElementCoords] = useState(null);
  const positions = [
    {
      top: "25%",
      left: "10%",
      text: "ИТЕЛИ",
    },
    {
      top: "50%",
      left: " 50%",
      text: "ИНА",
    },
    {
      top: "75%",
      left: "95%",
      text: "НА",
    },
  ];

  const AnimateAll = async () => {
    await controls.start((i) => ({
      opacity: 1,
      transition: { delay: 0.5 * i, duration: 1.3 },
    }));
    await (async () => {
      controls.start((i) => ({
        top: "50%",
        left: "50%",
        color: "#fff",
        transition: { delay: 0.5, duration: 1.3 },
      }));
      return whiteTextOpacity.start((i) => ({
        opacity: 0,
        transition: { duration: 2 },
      }));
    })();
    await (async () => {
      moveText.start(() => ({
        top: elementCoords.getBoundingClientRect().top,
        left: elementCoords.getBoundingClientRect().left,
        transform: "translateX(0%)",
        width: elementCoords.offsetWidth,
        height: elementCoords.offsetHeight,
        transition: { delay: 0.5, duration: 1.3 },
      }));
      return controls.start((i) => ({
        "font-size": elementCoords
          ? getComputedStyle(elementCoords).fontSize
          : "",
        "transition": { delay: 0.5, duration: 1.3 },
      }));
    })();
    localStorage.setItem("frame", JSON.stringify(3));
    props.changeFrame(3);
  };

  useEffect(() => {
    setElementCoords(props.element?.current.querySelector("p"));
    if (props.frame == 2) {
      AnimateAll();
    }
  });

  return props.frame == 2 ? (
    <TextAnimationWrapper
      initial={{ top: "7%", left: "50%", transform: "translateX(-50%)" }}
      animate={moveText}
    >
      {positions.map((item, index) => {
        return (
          <LargeText
            key={index + 1}
            as={motion.h1}
            initial={{
              opacity: 0,
              top: item.top,
              left: item.left,
              transform: "translate(-50%, -50%)",
            }}
            custom={index + 1}
            animate={controls}
          >
            РОД{" "}
            <WhiteText
              inital={{ opacity: 1 }}
              animate={whiteTextOpacity}
              before={index == 2}
            >
              {item.text}
            </WhiteText>
          </LargeText>
        );
      })}
    </TextAnimationWrapper>
  ) : null;
}
export default TextAnimation;
