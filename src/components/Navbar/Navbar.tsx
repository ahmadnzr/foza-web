import { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import { Text } from "../Typography";
import { Container } from "../Container";
import { mobile } from "../../helpers/theme/breakpoint";

export const Navbar = () => {
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const scrollY = window.scrollY;
        const h = navbarRef.current.offsetHeight;

        if (scrollY > h) {
          navbarRef?.current.classList.add("bg");
        } else {
          navbarRef?.current.classList.remove("bg");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper ref={navbarRef}>
      <CustomNavbarContainer>
        <img className="logo" src="/icons/foza.png" />
        <img className="burger" src="/icons/burger.png" />
        <NavMenu>
          <NavItem size="xs" $selected>
            <a href="#home">Home</a>
          </NavItem>
          <NavItem size="xs">
            <a href="#explore">Category</a>
          </NavItem>
          <NavItem size="xs">
            <a href="#about">About Us</a>
          </NavItem>
          <NavItem size="xs">
            <a href="#feature">Features</a>
          </NavItem>
          <NavItem size="xs">
            <a href="#contact">Contact Us</a>
          </NavItem>
          <NavItem size="xs">
            <a href="#download">Download</a>
          </NavItem>
        </NavMenu>
      </CustomNavbarContainer>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  width: 100%;
  height: 134px;
  transition: 1s ease;

  &.bg {
    z-index: 999;
    position: fixed;
    background: linear-gradient(180deg, #122342 0%, #0b0c27 100%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  ${mobile(css`
    height: 70px;
  `)}
`;

const CustomNavbarContainer = styled(Container)`
  height: 100%;
  position: relative;
  padding: 0 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  & .burger {
    display: none;
  }
  & .logo {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    width: 137px;
    height: 39px;
    object-fit: contain;
    cursor: pointer;
  }

  ${mobile(css`
    padding: 0;

    & .logo {
      width: 115px;
      height: 33px;
      left: 20px;
    }
    & .burger {
      display: flex;
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);

      object-fit: contain;
      cursor: pointer;
    }
  `)}
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  ${mobile(css`
    display: none;
  `)}
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
