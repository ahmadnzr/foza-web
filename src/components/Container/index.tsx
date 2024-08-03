import React from "react";
import styled, { css } from "styled-components";
import { mobile } from "../../helpers/theme/breakpoint";

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Container = ({ style, children, className, id }: Props) => {
  return (
    <Wrapper id={id} style={style} className={className}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 1512px;
  margin: 0 auto;

  ${mobile(css`
    max-width: 100vw;
  `)}
`;
