import styled from "styled-components";
import { colors, LinkMixin } from "@components/GlobalStyles.styles";
import { motion } from "framer-motion";
const SurnameList = styled(motion.ul)`
  padding-left: 50px;
  @media screen and (max-width: 1366px) {
    padding-left: 40px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 30px;
  }
  @media screen and (max-width: 360px) {
    padding-left: 20px;
    margin-top: 30px;
  }
`;
const SurnameItem = styled.a`
  font-size: 40px;
  ${LinkMixin(40, 7)}
  margin: 25px 0;

  @media screen and (max-width: 1366px) {
    font-size: 32px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
    padding: 0 10px;
    &::before {
      left: -25px;
    }
    &:hover::before {
      left: -30px;
    }
  }
  @media screen and (max-width: 360px) {
    font-size: 14px;
    padding: 0 7px;
    &::before {
      left: -20px;
    }
    &:hover::before {
      left: -23px;
    }
  }
`;
export { SurnameList, SurnameItem };
