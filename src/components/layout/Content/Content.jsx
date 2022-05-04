import React from "react";
import {
  ContentWrapper,
  Grid,
  HorizontalLines,
  VerticalLines,
  ContentBorder,
} from "./Content.styles";

export default function Content(props) {
  return (
    <ContentWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      {props.children}
      <ContentBorder>
        <Grid top={0} left={0} />
        <Grid top={0} right={0} />
        <Grid bottom={0} right={0} />
        <Grid bottom={0} left={0} />
        <HorizontalLines />
        <VerticalLines />
      </ContentBorder>
    </ContentWrapper>
  );
}
