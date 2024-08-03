import React from "react";
import styled, { css } from "styled-components";
import { mobile } from "../../helpers/theme/breakpoint";

interface HeadingProps {
  type: "h1" | "h2" | "h3";
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Heading = ({ style, type, children }: HeadingProps) => {
  switch (type) {
    case "h1":
      return <H1 style={style}>{children}</H1>;

    default:
      return <>{children}</>;
  }
};

const H1 = styled.h1`
  ${(props) => css`
    line-height: normal;
    font-style: normal;
    font-size: ${props.theme.fontSize.xlg};
    font-weight: ${props.theme.fontWeight.bold};

    ${mobile(css`
      font-size: ${props.theme.mobile.fontSize.xlg};
    `)};
  `}
`;
