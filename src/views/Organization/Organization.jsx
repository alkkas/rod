import React, { useEffect, useState } from "react";
import { Container } from "@components/GlobalStyles.styles";
import { Header, Content, Loading } from "@components";
import { getOrganizations } from "@services";
import { OrganizationsList, OrganizationItem } from "./Organization.styles";

export default function Organization() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const organizations = await getOrganizations();
      setData(organizations);
    };
    fetchData().catch(console.error);
  });

  return (
    <Container>
      <Header section="ОРГАНИЗАЦИЯ" />
      <Content>
        {Object.keys(data).length ? (
          <OrganizationsList
            animate={{ opacity: 1, display: "block" }}
            initial={{ opacity: 0, display: "none" }}
            transition={{ duration: 1.3 }}
          >
            {Object.keys(data).map((item) => {
              return (
                <li key={item}>
                  <OrganizationItem>{data[item].name}</OrganizationItem>
                </li>
              );
            })}
          </OrganizationsList>
        ) : (
          <Loading />
        )}
      </Content>
    </Container>
  );
}
