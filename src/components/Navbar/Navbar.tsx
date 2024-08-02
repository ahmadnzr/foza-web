import React from "react";
import styled, { css } from "styled-components";

import { Text } from "../Typography";

export const Navbar = () => {
  return (
    <Wrapper>
      <NavLogo $url="/icons/foza.png" />
      <NavMenu>
        <NavItem $selected>Home</NavItem>
        <NavItem>Category</NavItem>
        <NavItem>About Us</NavItem>
        <NavItem>Features</NavItem>
        <NavItem>Contact Us</NavItem>
        <NavItem>Download</NavItem>
      </NavMenu>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  width: 100%;
  height: 134px;
  padding: 0 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLogo = styled.div<{ $url: string }>`
  position: absolute;
  top: 50%;
  left: 100px;
  transform: translateY(-50%);

  content: "";
  width: 137px;
  height: 39px;

  background-position: center;
  background: url(/icons/foza.png);
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const NavItem = styled(Text)<{ $selected?: boolean }>`
  cursor: pointer;
  color: #a8a8a8;
  transition: 0.3s ease;

  ${(props) =>
    props.$selected &&
    css`
      color: #fff;
      font-size: ${props.theme.fontSize.xs};
      text-shadow: 2px 2px 5px #5a308a;
      font-size: ${props.theme.fontSize.sm};
      font-weight: 600;
    `}

  &:hover {
    color: #fff;
  }
`;
