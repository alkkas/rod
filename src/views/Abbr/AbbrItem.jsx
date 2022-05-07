import React, { useState } from "react";
import {
  AbbrItemTitle,
  AbbrSubItem,
  AbbrLink,
  AbbrItemWrapper,
} from "./Abbr.styles";
import { getLocalCount, setLocalCount } from "@services";

export default function AbbrItem(props) {
  const [count, setCount] = useState(getLocalCount()[props.item] || 1);
  const data = props.data;
  const item = props.item;

  function handleClick(item, subItem, index) {
    if (!(index + 1 < count)) {
      setCount((count) => count + 1);
    }
    props.showPopUp(item, subItem);
    setLocalCount(item, count + 1);
  }

  return (
    <>
      <AbbrItemWrapper key={item}>
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
      </AbbrItemWrapper>
    </>
  );
}
