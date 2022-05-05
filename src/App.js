import React from "react";
import { hot } from "react-hot-loader/root";

import { GlobalStyle, Wrapper } from "@components/GlobalStyles.styles";
import { Home, Abbr, Gods, Surname, Organization } from "@views";
import { Routes, Route } from "react-router-dom";
import favicon from "@assets/img/favicon.ico";
import Favicon from "react-favicon";

function App() {
  return (
    <Wrapper>
      <Favicon url={favicon} />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gods" element={<Gods />} />
        <Route path="/abbr" element={<Abbr />} />
        <Route path="/surname" element={<Surname />} />
        <Route path="/organization" element={<Organization />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
