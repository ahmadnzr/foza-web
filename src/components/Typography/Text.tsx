import React from "react";
import styled, { css } from "styled-components";
import { mobile } from "../../helpers/theme/breakpoint";
import { FontWeight } from "../../helpers/types/styled";

interface Props {
  weight?: keyof FontWeight;
  children: React.ReactNode;
  className?: string;
}

export const Text = ({ className, children, weight = "normal" }: Props) => {
  return (
    <Typography $weight={weight} className={className}>
      {children}
    </Typography>
  );
};

const Typography = styled.p<{ $weight: keyof FontWeight }>`
  ${(props) => css`
    font-size: ${props.theme.fontSize.xs};
    font-weight: ${props.theme.fontWeight[props.$weight]};
    color: #fff;

    ${mobile(css`
      font-size: ${(props) => props.theme.mobile.fontSize.sm};
    `)};
  `}
`;
