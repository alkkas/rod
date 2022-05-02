import React from "react";
import { Container } from "@components/GlobalStyles.styles";
import { Header, Content } from "@components";
import { GodsTitle, GodsWrapper } from "./Gods.styles";

export default function Gods() {
  return (
    <Container>
      <Header section="БОЖЕСТВО" />
      <Content>
        <GodsWrapper>
          <GodsTitle>
            Род - <span>божество наших предков...</span>
          </GodsTitle>
        </GodsWrapper>
      </Content>
    </Container>
  );
}
