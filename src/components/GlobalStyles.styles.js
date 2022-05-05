import styled from "styled-components";
import { createGlobalStyle, css } from "styled-components";
import { motion } from "framer-motion";
const colors = {
  black: "#1A0202",
  red: "#E03434",
  white: "#FFFFFF",
  green: "#29D158",
};
const LinkMixin = (beforeWidth, beforeHeight) => css`
  display: inline-block;
  color: ${colors.white};
  position: relative;
  padding: 0 15px;
  &:hover::after {
    height: 100%;
  }
  &:hover::before {
    left: -60px;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: -50px;
    transform: translateY(-50%);
    width: ${beforeWidth}px;
    height: ${beforeHeight}px;
    background: ${colors.red};
    transition: 0.4s ease all;
  }
  &::after {
    transition: 0.4s ease all;
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0%;
    top: 0;
    left: 0;
    z-index: -1;
    background: ${colors.red};
  }
  @media screen and (max-width: 1336px) {
    &::before {
      width: ${beforeWidth - 10}px;
      height: ${beforeHeight - 5}px;
      left: -40px;
    }
    &:hover::before {
      left: -50px;
    }
  }
  @media screen and (max-width: 360px) {
    &::before {
      width: ${beforeWidth - 20}px;
      height: ${beforeHeight - 10}px;
      left: -30px;
    }
    &:hover::before {
      left: -40px;
    }
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${colors.black};
`;
const Container = styled.section`
  padding: 1rem 1.5rem;
  min-height: 100vh;
  max-width: 1920px;
  margin: auto;
  @media screen and (max-width: 768px) {
    padding: 0.8rem 1.3rem;
  }
  @media screen and (max-width: 360px) {
    padding: 15px;
  }
`;
const Large = styled.h1`
  font-size: 2.5rem;
`;
const Medium = styled.h3`
  font-size: 2rem;
`;
const Small = styled.p`
  font-size: 1rem;
`;
const GlobalStyle = createGlobalStyle`

ul {
  list-style:none;
}
a {
  text-decoration: none;
  cursor: pointer;

}

html {
  font-family: "Playfair Display", "Times New Roman", Times, serif;
  font-size: 48px;

  color: ${colors.white}
}
@media screen and (max-width: 1336px) {
  html {
    font-size: 32px;
  }
}
@media screen and (max-width: 768px) {
  html {
    font-size: 24px;
  }
}
@media screen and (max-width: 360px) {
  html {
    font-size: 18px;
  }
}
/* Box sizing rules */
*,
*::before,
*::after {
    margin: 0;
  padding: 0;
  box-sizing: border-box;
   z-index: 1;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

`;
export {
  Wrapper,
  Container,
  GlobalStyle,
  Large,
  Medium,
  Small,
  colors,
  LinkMixin,
};
