import styled from "styled-components";
import { Small } from "@components/GlobalStyles.styles";
import LogoImg from "@assets/img/logo.svg";
import { colors } from "@components/GlobalStyles.styles";
import { motion } from "framer-motion";
const LogoSmall = styled(Small)`
  font-size: 40px;
  opacity: ${(props) => (props.frame == 3 ? 1 : 0)};
  font-weight: 900;
`;

const LogoImgStyled = styled(LogoImg)`
  width: 100%;
  display: block;
  * > path {
    fill: ${colors.red};
  }
`;

const LogoWrapper = styled(motion.section)`
  max-width: 88px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${(props) => {
    if (props.frame == 2 || props.frame == 3) {
      return 1;
    }
    return 0;
  }};
`;
export { LogoWrapper, LogoSmall, LogoImgStyled };
