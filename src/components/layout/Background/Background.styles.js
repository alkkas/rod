import styled from "styled-components";
import { colors } from "@components/GlobalStyles.styles";
import { motion } from "framer-motion";
const BackgroundWrapper = styled(motion.article)`
  position: absolute;
  opacity: 0.4;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;
const BackgroundItemWrapper = styled(motion.div)`
  width: ${(props) => props.size}px;
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => -props.y}px;
  * svg {
    width: 100%;
  }
  * > path {
    fill: ${colors.white};
  }
`;

export { BackgroundItemWrapper, BackgroundWrapper };
