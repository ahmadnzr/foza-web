import React from "react";
import styled, { css } from "styled-components";
import { mobile } from "../../helpers/theme/breakpoint";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Text = ({ className, children }: Props) => {
  return <Typography className={className}>{children}</Typography>;
};

const Typography = styled.p`
  ${(props) => css`
    font-size: ${props.theme.fontSize.xs};
    font-weight: 500;
    color: #fff;

    ${mobile(css`
      font-size: ${(props) => props.theme.mobile.fontSize.sm};
    `)};
  `}
`;
