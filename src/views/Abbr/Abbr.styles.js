import styled from "styled-components";
import { colors, Medium } from "@components/GlobalStyles.styles";
import { motion } from "framer-motion";
import Close from "@assets/img/close.svg";

const AbbrList = styled(motion.ol)`
  list-style: none;
  counter-reset: my-counter;
  padding: 40px 90px;
`;
const AbbrItem = styled.li`
  counter-increment: my-counter;
`;
const AbbrItemTitle = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  position: relative;
  margin-bottom: 30px;
  &::before {
    font-size: 2rem;
    content: counter(my-counter) ". ";
    position: absolute;
    top: 30%;
    transform: translateY(-50%);
    left: -70px;
    color: ${colors.red};
    font-weight: bold;
  }
`;
const AbbrSubItem = styled.li`
  color: ${colors.green};
  margin: 10px 0;
  font-weight: 800;
  font-size: 1.5rem;
`;
const AbbrLink = styled.button`
  cursor: pointer;
  background: ${(props) => (props.visited ? colors.green : "none")};
  text-decoration: ${(props) => (props.visited ? "none" : "underline")};
  color: ${colors.white};
  border: none;
  padding: 7px;
  transition: 0.3s ease all;
  font-weight: 400;
  font-size: 1rem;
  &:hover {
    opacity: 0.6;
  }
`;

const AbbrPopUpWrapper = styled(motion.article)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(119, 119, 119, 0.3);
`;

const AbbrPopUpContent = styled.div`
  border-radius: 15px;
  width: 60%;
  min-height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: ${colors.black};
  color: ${colors.white};
`;
const AbbrCloseWrapper = styled.div`
  width: 58px;
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
`;
const AbbrPopUpClose = styled(Close)`
  width: 100%;
`;
const AbbrPopUpTitle = styled(Medium)`
  margin-bottom: 2rem;
`;
export {
  AbbrList,
  AbbrItem,
  AbbrItemTitle,
  AbbrSubItem,
  AbbrLink,
  AbbrPopUpWrapper,
  AbbrPopUpContent,
  AbbrPopUpClose,
  AbbrCloseWrapper,
  AbbrPopUpTitle,
};
