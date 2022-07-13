import React, { useState, useEffect } from "react";
import { BackgroundItemWrapper } from "./Background.styles";
import Symbol1 from "@assets/img/symbol1.svg";
import Symbol2 from "@assets/img/symbol2.svg";
import Symbol3 from "@assets/img/symbol3.svg";
import Symbol4 from "@assets/img/symbol4.svg";

export default function BackgroundItem(props) {
  const symbols = [<Symbol1 />, <Symbol2 />, <Symbol3 />, <Symbol4 />];

  return (
    <BackgroundItemWrapper
      x={props.x}
      y={props.y}
      size={props.size}
      intial={{ top: -props.y }}
      animate={{ top: "100%" }}
      transition={{
        duration: 8 > props.y / 10 ? props.y / 10 + 5 : props.y / 10,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 0.5,
      }}
    >
      {symbols[props.type]}
    </BackgroundItemWrapper>
  );
}
