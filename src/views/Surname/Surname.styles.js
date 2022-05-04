import styled from "styled-components";
import { colors, LinkMixin } from "@components/GlobalStyles.styles";
import { motion } from "framer-motion";
const SurnameList = styled(motion.ul)`
  padding-left: 50px;
`;
const SurnameItem = styled.a`
  font-size: 40px;
  ${LinkMixin(40, 7)}
  margin: 25px 0;
`;
export { SurnameList, SurnameItem };
