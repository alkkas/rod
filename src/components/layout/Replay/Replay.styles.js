import styled from "styled-components";
import { colors } from "@components/GlobalStyles.styles";

const ReplayButton = styled.button`
  background: none;
  font-size: 0.5rem;
  cursor: pointer;
  color: ${colors.white};
  border: none;
  opacity: 0.5;
  transition: 0.3s ease all;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 360px) {
    font-size: 0.8rem;
  }
`;
export { ReplayButton };
