import React, { useEffect } from "react";
import { BackgroundWrapper } from "./Background.styles";
import BackgroundItem from "./BackgroundItem";
import { createSymbols } from "@services";

function Background(props) {
  const size = window.innerWidth <= 768 ? 40 : 70;
  const symbols = createSymbols(
    window.innerWidth <= 768 ? 20 : 70,
    window.innerWidth,
    window.innerHeight,
    size
  );
  useEffect(() => {
    console.log(props.frame);
  });
  return (
    <BackgroundWrapper
      initial={{ opacity: 0.4 }}
      animate={props.frame != 1 ? { opacity: 0 } : {}}
      transition={{ duration: 1.3 }}
    >
      {symbols.map((item, index) => (
        <BackgroundItem
          key={index}
          x={item.x}
          y={item.y}
          size={size}
          type={item.type}
        />
      ))}
    </BackgroundWrapper>
  );
}
export { Background };
