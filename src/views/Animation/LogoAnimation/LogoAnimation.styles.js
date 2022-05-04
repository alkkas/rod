import Logo from "@assets/img/logo.svg";
import { colors } from "@components/GlobalStyles.styles.js";
import styled from "styled-components";
import { motion } from "framer-motion";

const LogoWrapper = styled(motion.div)`
  position: absolute;
  top: ${(props) => props.coords.top}px;
  left: ${(props) => props.coords.left}px;
  width: 266px;
  cursor: pointer;
  transition: 0.5s ease transform;
  &:hover {
    transform: scale(1.05);
  }
`;
const StyledLogo = styled(Logo)`
  width: 100%;

  * > path {
    fill: ${colors.red};
  }
`;

export { StyledLogo, LogoWrapper };
