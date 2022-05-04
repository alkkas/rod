import React, { useEffect, useState } from "react";
import { Container } from "@components/GlobalStyles.styles";
import { Header, Content, Loading } from "@components";
import { getOrganizations } from "@services";
import { SurnameList, SurnameItem } from "./Surname.styles";

export default function Surname() {
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
      <Header section="ФАМИЛИЯ" />
      <Content>
        {Object.keys(data).length ? (
          <SurnameList
            animate={{ opacity: 1, display: "block" }}
            initial={{ opacity: 0, display: "none" }}
            transition={{ duration: 1.3 }}
          >
            {Object.keys(data).map((item) => {
              return (
                <li key={item}>
                  <SurnameItem>{data[item].name}</SurnameItem>
                </li>
              );
            })}
          </SurnameList>
        ) : (
          <Loading />
        )}
      </Content>
    </Container>
  );
}
