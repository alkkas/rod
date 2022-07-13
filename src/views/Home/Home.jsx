import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  useEffect(() => {
    document.title = "РОД";
  });
  return (
    <HomeContainer
      as={motion.section}
      animate={frame === 1 || frame === 2 ? "visible" : "hidden"}
      transition={{ duration: 1.3 }}
    >
      {/* animation frames */}
      <HomeHeader
        animate={frame === 3 ? { opacity: 1, display: "flex" } : {}}
        initial={frame === 3 ? { opacity: 0, display: "none" } : {}}
        transition={{ duration: 1.3 }}
      >
        <Logo frame={frame} changeFrame={setFrame} ref={logo} />
        <Replay frame={frame} changeFrame={setFrame} />
      </HomeHeader>
      <Background />
      <LogoAnimation frame={frame} changeFrame={setFrame} element={logo} />
      <TextAnimation frame={frame} changeFrame={setFrame} element={logo} />

      {/* home component*/}
      <HomeWrapper
        animate={frame === 3 ? { opacity: 1, display: "flex" } : {}}
        initial={{ opacity: 0, display: "none" }}
        transition={{ duration: 1.3 }}
      >
        <HomeList>
          <ul>
            {/* styled router links */}
            <HomeListItem to="/gods">РОДИТЕЛИ</HomeListItem>
            <HomeListItem to="/abbr">АББРЕВИАТУРА</HomeListItem>
            <HomeListItem to="/surname">ФАМИЛИЯ</HomeListItem>
            <HomeListItem to="/organization">ОРГАНИЗАЦИЯ</HomeListItem>
          </ul>
        </HomeList>
      </HomeWrapper>
    </HomeContainer>
  );
}
