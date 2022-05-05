import styled from "styled-components";
import { colors, Container, LinkMixin } from "@components/GlobalStyles.styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeWrapper = styled(motion.section)`
  margin: 1rem 2rem 0;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin: 5rem 0 0;
  }
  @media screen and (max-width: 360px) {
    margin: 0;
  }
`;
const HomeList = styled.nav`
  margin-left: 1.5rem;
  & ul {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;
const HomeHeader = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HomeContainer = styled(Container)`
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const HomeListItem = styled(Link)`
  font-size: 1.7rem;
  ${LinkMixin(50, 15)}
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin: 10px 0;
  }
`;
export { HomeContainer, HomeWrapper, HomeList, HomeListItem, HomeHeader };
