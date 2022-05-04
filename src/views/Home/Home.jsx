import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  HomeList,
  HomeListItem,
  HomeWrapper,
  HomeContainer,
  HomeHeader,
} from "./Home.styles";
import { Logo, Replay, Background } from "@components";
import { LogoAnimation, TextAnimation } from "@views/Animation";

export default function Home() {
  const [frame, setFrame] = useState(
    parseFloat(localStorage.getItem("frame")) || 1
  );
  const logo = useRef(null);

  return (
    <HomeContainer>
      {/* animation frames */}
      <HomeHeader
        animate={frame === 3 ? { opacity: 1, display: "flex" } : {}}
        initial={frame === 3 ? { opacity: 0, display: "none" } : {}}
        transition={{ duration: 1.3 }}
      >
        <Logo frame={frame} changeFrame={setFrame} ref={logo} />
        <Replay frame={frame} changeFrame={setFrame} />
      </HomeHeader>
      <Background frame={frame} />
      <LogoAnimation frame={frame} changeFrame={setFrame} element={logo} />
      <TextAnimation frame={frame} changeFrame={setFrame} element={logo} />

      {/* home component*/}
      <HomeWrapper
        animate={frame === 3 ? { opacity: 1, display: "block" } : {}}
        initial={{ opacity: 0, display: "none" }}
        transition={{ duration: 1.3 }}
      >
        <HomeList>
          <ul>
            {/* styled router links */}
            <HomeListItem to="/gods">БОЖЕСТВО</HomeListItem>
            <HomeListItem to="/abbr">АББРЕВИАТУРА</HomeListItem>
            <HomeListItem to="/surname">ФАМИЛИЯ</HomeListItem>
            <HomeListItem to="/organization">ОРГАНИЗАЦИЯ</HomeListItem>
          </ul>
        </HomeList>
      </HomeWrapper>
    </HomeContainer>
  );
}
