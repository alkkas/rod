import styled from "styled-components";
import Arrow from "@assets/img/arrow.svg";
import Statue from "@assets/img/statue.svg";
import { colors } from "@components/GlobalStyles.styles";
import { Logo } from "@components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderLogo = styled(Logo)``;
const StyledArrow = styled(Arrow)`
  width: 53px;
  margin-right: 30px;
  transition: 0.3s ease all;
  * > path {
    fill: ${colors.red};
  }
`;
const HeaderFlexItem = styled.li`
  width: 33.333%;
  display: ${(props) => (props.flex ? "flex" : "block")};
  justify-content: ${(props) => (props.middle ? "center" : "flex-end")};
`;
const Back = styled(Link)`
  color: ${colors.white};
  display: flex;
  &:hover {
    svg {
      transform: translateX(-10px);
    }
  }
`;
const StyledStatue = styled(Statue)`
  width: 65px;
  height: 110px;
`;
export {
  HeaderWrapper,
  StyledArrow,
  Back,
  StyledStatue,
  HeaderLogo,
  HeaderFlexItem,
};
