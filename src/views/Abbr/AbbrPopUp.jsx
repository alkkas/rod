import React from "react";
import {
  AbbrPopUpWrapper,
  AbbrPopUpContent,
  AbbrPopUpClose,
  AbbrCloseWrapper,
  AbbrPopUpTitle,
} from "./Abbr.styles";
import { Small } from "@components/GlobalStyles.styles";
import { enableScroll } from "@services/scrollHelper/scrollHelper";

export default function AbbrPopUp(props) {
  function handleClick() {
    props.close();
    enableScroll();
  }
  return (
    <AbbrPopUpWrapper
      animate={{ opacity: 1, display: "block" }}
      initial={{ opacity: 0, display: "none" }}
      transition={{ duration: 0.3 }}
    >
      <AbbrPopUpContent>
        <AbbrPopUpTitle>{props.data.name}</AbbrPopUpTitle>
        <Small>{props.data.desc}</Small>
        <AbbrCloseWrapper>
          <AbbrPopUpClose onClick={handleClick} />
        </AbbrCloseWrapper>
      </AbbrPopUpContent>
    </AbbrPopUpWrapper>
  );
}
