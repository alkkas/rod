import styled from "styled-components";
import { motion } from "framer-motion";
import Tree from "@assets/img/tree.svg";
import { colors } from "@components/GlobalStyles.styles";

const ContentWrapper = styled(motion.section)`
  padding: 55px;
  position: relative;
  min-height: 500px;
  margin-top: 40px;
`;
const Grid = styled(Tree)`
  position: absolute;
  width: 50px;
  top: ${(props) => (props.top === 0 ? props.top : "unset")};
  left: ${(props) => (props.left === 0 ? props.left : "unset")};
  bottom: ${(props) => (props.bottom === 0 ? props.bottom : "unset")};
  right: ${(props) => (props.right === 0 ? props.right : "unset")};

  * > path {
    fill: ${colors.white};
  }
`;
const HorizontalLines = styled.div`
  &::before,
  &::after {
    content: "";
    display: block;
    width: calc(100% - 120px);
    height: 3px;
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    background: ${colors.white};
  }
  &::after {
    top: unset;
    bottom: 25px;
  }
`;

const VerticalLines = styled.div`
  &::before,
  &::after {
    content: "";
    display: block;
    width: 3px;
    position: absolute;

    height: calc(100% - 120px);
    left: 25px;
    top: 50%;
    transform: translateY(-50%);
    background: ${colors.white};
  }
  &::after {
    left: unset;
    right: 25px;
  }
`;
const ContentBorder = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export { ContentWrapper, ContentBorder, Grid, HorizontalLines, VerticalLines };
