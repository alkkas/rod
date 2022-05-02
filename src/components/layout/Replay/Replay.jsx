import React from "react";
import { ReplayButton } from "./Replay.styles";
export default function Replay(props) {
  function handleClick() {
    localStorage.setItem("frame", JSON.stringify(1));
    window.location.reload();
  }
  return props.frame == 3 ? (
    <ReplayButton onClick={handleClick}>Повторить анимацию</ReplayButton>
  ) : null;
}
