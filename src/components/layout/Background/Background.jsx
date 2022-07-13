import React, { useEffect, useRef } from "react";
import { BackgroundWrapper } from "./Background.styles";
import BackgroundItem from "./BackgroundItem";
import { createSymbols } from "@services";
const variants = {
  visible: { opacity: 0.4 },
  hidden: { opacity: 0 },
};
export const Background = React.memo((props) => {
  const size = window.innerWidth <= 768 ? 40 : 70;
  const symbols = createSymbols(
    window.innerWidth <= 768 ? 20 : 70,
    window.innerWidth,
    window.innerHeight,
    size
  );

  return (
    <BackgroundWrapper variants={variants}>
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
});
