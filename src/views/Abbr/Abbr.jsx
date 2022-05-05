import React, { useEffect, useState } from "react";
import { Container } from "@components/GlobalStyles.styles";
import { Header, Content, Loading } from "@components";
import {
  AbbrList,
  AbbrItem,
  AbbrItemTitle,
  AbbrSubItem,
  AbbrLink,
} from "./Abbr.styles";
import { disableScroll } from "@services/scrollHelper/scrollHelper";
import { getAbbr } from "@services";
import AbbrPopUp from "./AbbrPopUp";

export default function Abbr() {
  const [data, setData] = useState({});
  const [active, setActive] = useState(false);
  const [currentWord, setCurrentWord] = useState({});
  const [count, setCount] = useState(
    parseFloat(localStorage.getItem("count")) || 1
  );

  useEffect(() => {
    document.title = "РОД - Аббревиатура";
    const fetchData = async () => {
      const data = await getAbbr();

      setData(data);
    };

    fetchData().catch(console.error);
  });

  function handleClick(item, subItem, index) {
    if (!(index + 1 < count)) {
      setCount((count) => count + 1);
      localStorage.setItem("count", JSON.stringify(count + 1));
    }
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
              return (
                <AbbrItem key={item}>
                  <AbbrItemTitle>{data[item].name}</AbbrItemTitle>
                  <ul>
                    {Object.keys(data[item].data).map((subItem, index) => {
                      return index + 1 <= count ? (
                        <AbbrSubItem key={subItem}>
                          Д -{" "}
                          <AbbrLink
                            onClick={() => handleClick(item, subItem, index)}
                            visited={index + 1 != count ? true : false}
                          >
                            {" "}
                            {data[item].data[subItem].name}
                          </AbbrLink>
                        </AbbrSubItem>
                      ) : null;
                    })}
                  </ul>
                </AbbrItem>
              );
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
