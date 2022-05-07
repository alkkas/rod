import React, { useEffect, useState } from "react";
import { Container } from "@components/GlobalStyles.styles";
import { Header, Content } from "@components";
import { getOrganizations } from "@services";
import { OrganizationTitle } from "./Organization.styles";

export default function Organization() {
  useEffect(() => {
    document.title = "РОД - Организация";
  });
  return (
    <Container>
      <Header section="ОРГАНИЗАЦИЯ" />
      <Content>
        <OrganizationTitle>ОРГАНИЗАЦИЯ</OrganizationTitle>
      </Content>
    </Container>
  );
}
