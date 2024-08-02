import React from "react";
import styled, { css } from "styled-components";
import { mobile } from "../../helpers/theme/breakpoint";
import { FontSize, FontWeight } from "../../helpers/types/styled";

interface Props {
  id?: string;
  weight?: keyof FontWeight;
  size?: keyof FontSize;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Text = ({
  id,
  className,
  children,
  weight = "normal",
  size = "sm",
  style,
}: Props) => {
  return (
    <Typography
      id={id}
      style={style}
      $weight={weight}
      className={className}
      $size={size}
    >
      {children}
    </Typography>
  );
};

const Typography = styled.p<{
  $weight: keyof FontWeight;
  $size: keyof FontSize;
}>`
  ${(props) => css`
    font-size: ${props.theme.fontSize[props.$size]};
    font-weight: ${props.theme.fontWeight[props.$weight]};
    color: #fff;

    ${mobile(css`
      font-size: ${props.theme.mobile.fontSize[props.$size]};
    `)};
  `}
`;
