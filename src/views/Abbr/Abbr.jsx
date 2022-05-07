import React, { useEffect, useState } from "react";
import { Container } from "@components/GlobalStyles.styles";
import { Header, Content, Loading } from "@components";
import { AbbrList } from "./Abbr.styles";
import { disableScroll } from "@services/scrollHelper/scrollHelper";
import { getAbbr } from "@services";
import AbbrItem from "./AbbrItem";
import AbbrPopUp from "./AbbrPopUp";

export default function Abbr() {
  const [data, setData] = useState({});
  const [active, setActive] = useState(false);
  const [currentWord, setCurrentWord] = useState({});

  useEffect(() => {
    document.title = "РОД - Аббревиатура";
    const fetchData = async () => {
      const data = await getAbbr();

      setData(data);
    };

    fetchData().catch(console.error);
  });

  function showPopUp(item, subItem) {
    setCurrentWord({
      name: data[item].data[subItem].name,
      desc: data[item].data[subItem].desc,
    });
    setActive(true);
    disableScroll();
  }

  return (
    <Container>
      <Header section="АББРЕВИАТУРА" />
      <Content>
        {Object.keys(data).length ? (
          <AbbrList
            animate={{ opacity: 1, display: "block" }}
            initial={{ opacity: 0, display: "none" }}
            transition={{ duration: 1.3 }}
          >
            {Object.keys(data).map((item) => {
              return <AbbrItem item={item} data={data} showPopUp={showPopUp} />;
            })}
          </AbbrList>
        ) : (
          <Loading />
        )}
      </Content>
      {active ? <AbbrPopUp close={setActive} data={currentWord} /> : null}
    </Container>
  );
}
