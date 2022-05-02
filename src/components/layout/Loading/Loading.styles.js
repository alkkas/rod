import styled from "styled-components";
import { colors } from "@components/GlobalStyles.styles";
import LoadingPic from "@assets/img/loading.svg";
import { motion } from "framer-motion";
const LoadingWrapper = styled(motion.div)`
  margin: auto;
  max-width: 70px;
  margin-top: 100px;
`;
const StyledLoadingPic = styled(LoadingPic)`
  width: 100%;
  display: block;
  path {
    fill: ${colors.red};
  }
`;

export { StyledLoadingPic, LoadingWrapper };
