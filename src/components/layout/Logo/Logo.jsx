import React, { forwardRef } from "react";
import { LogoWrapper, LogoSmall, LogoImgStyled } from "./Logo.styles";

const Logo = forwardRef((props, ref) => {
  return (
    <LogoWrapper frame={props.frame} ref={ref}>
      <LogoImgStyled />
      <LogoSmall frame={props.frame}>РОД</LogoSmall>
    </LogoWrapper>
  );
});

export default Logo;
