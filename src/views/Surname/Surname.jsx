import React from "react";
import { Container } from "@components/GlobalStyles.styles";
import { Header, Content } from "@components";
import { SurnameTitle } from "./Surname.styles";
export default function Surname() {
  return (
    <Container>
      <Header section="ФАМИЛИЯ" />
      <Content>
        <SurnameTitle>ФАМИЛИЯ</SurnameTitle>
      </Content>
    </Container>
  );
}
