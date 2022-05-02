import React from "react";
import { ReplayButton } from "./Replay.styles";
export default function Replay(props) {
  function handleClick() {
    props.changeFrame(1);
  }
  return props.frame == 3 ? (
    <ReplayButton onClick={handleClick}>Повторить анимацию</ReplayButton>
  ) : null;
}
