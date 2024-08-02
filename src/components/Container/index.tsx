import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.section`
  position: relative;
  max-width: 1512px;
  margin: 0 auto;
`;
