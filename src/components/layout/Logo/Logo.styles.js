import styled from "styled-components";
import { Small } from "@components/GlobalStyles.styles";
import LogoImg from "@assets/img/logo.svg";
import { colors } from "@components/GlobalStyles.styles";
import { motion } from "framer-motion";
const LogoSmall = styled(Small)`
  font-size: 40px;
  opacity: ${(props) => (props.frame == 3 ? 1 : 0)};
  font-weight: 900;
  @media screen and (max-width: 1366px) {
    font-size: 32px;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 360px) {
    font-size: 16px;
  }
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
  @media screen and (max-width: 1366px) {
    max-width: 60px;
  }
  @media screen and (max-width: 360px) {
    width: 30px;
  }
`;
export { LogoWrapper, LogoSmall, LogoImgStyled };
