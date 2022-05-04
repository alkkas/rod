import React from "react";
import { HeaderWrapper, StyledArrow, Back, HeaderLogo } from "./Header.styles";
import { Small } from "@components/GlobalStyles.styles";
import { motion } from "framer-motion";

export default function Header(props) {
  return (
    <motion.header
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      <HeaderWrapper>
        <Back to="/">
          <StyledArrow />
          <Small>{props.section}</Small>
        </Back>
        <HeaderLogo frame={3} />
      </HeaderWrapper>
    </motion.header>
  );
}
