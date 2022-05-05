import React from "react";
import { StyledLoadingPic, LoadingWrapper } from "./Loading.styles";

export default function Loading() {
  return (
    <LoadingWrapper
      animate={{
        rotate: [0, 360],
      }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      <StyledLoadingPic />
    </LoadingWrapper>
  );
}
export { Loading };
