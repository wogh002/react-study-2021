import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "./assets/logo.svg";
const AppLogo = styled(Logo).attrs(({ size, spaceright }) => ({
  //정적요소추가
  title: "Front end maste jae ho park.",
  id: "SVG-LOGO",
  className: "svg-logo",
  //동적요소추가
  size: size || null,
  spaceright: spaceright || null,
}))`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin-right: ${({ spaceright }) => spaceright};
`;

const Link = styled.a`
  color: ${({ color }) => color || "#0066ff"};
  text-decoration: none;
`;
const UnderLinedLink = styled(Link).attrs(
  ({ space, borderWidth, borderStyle, borderColor }) => {
    return {
      //정적요소추가
      href: "https://ko.reactjs.org/",
      lang: "en",
      rel: "noopener noreferrer",
      target: "_blank",
      //동적요소추가
      space: space || 0,
      borderWidth: borderWidth || 1,
      borderStyle: borderStyle || "solid",
      borderColor: borderColor || "black",
    };
  }
)`
  display: block;
  padding-bottom: ${({ space }) => space};
  border: ${({ borderWidth }) => borderWidth}
    ${({ borderStyle }) => borderStyle} ${({ borderColor }) => borderColor};
`;

const LinkText = styled.span`
  display: block;
  border-radius: ${({ rounded }) => (rounded ? "50%" : null)};
  background: black;
  color: #fff;
`;

const AppHeader = () => (
  <header className="App-header">
    <h1>
      <UnderLinedLink
        color="red"
        borderColor="red"
        borderStyle="solid"
        space="50px"
        borderWidth="5px"
      >
        <AppLogo size="5rem" spaceright="10px" />
        Front -End Masters
      </UnderLinedLink>
      <LinkText>스판 스타일!</LinkText>
    </h1>
  </header>
);

export default AppHeader;
