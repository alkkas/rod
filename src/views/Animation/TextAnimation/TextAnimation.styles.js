import { colors } from "@components/GlobalStyles.styles.js";
import styled from "styled-components";
import { Large } from "@components/GlobalStyles.styles";
import { motion } from "framer-motion";

const TextAnimationWrapper = styled(motion.article)`
  position: absolute;
  width: 80%;
  height: 100%;
`;

const LargeText = styled(Large)`
  display: inline-block;
  position: absolute;
  color: ${colors.red};
`;
const WhiteText = styled(motion.h1)`
  position: absolute;
  left: 100%;
  top: -0px;
  color: ${colors.white};
  font-size: 2.5rem;
`;
export { LargeText, WhiteText, TextAnimationWrapper };
