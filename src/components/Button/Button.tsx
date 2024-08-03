import React from "react";
import styled, { css } from "styled-components";
import { mobile } from "../../helpers/theme/breakpoint";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  icon?: string;
  style?: React.CSSProperties;
}

export const Button = ({ style, icon, primary, children }: ButtonProps) => {
  return (
    <BtnContainer style={style} $icon={icon} $isPrimary={primary}>
      {children}
    </BtnContainer>
  );
};

const BtnContainer = styled.button<{ $isPrimary?: boolean; $icon?: string }>`
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  padding: 0px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 5px;
  font-size: ${(props) => props.theme.fontSize.xs};

  ${(props) =>
    props.$icon &&
    css`
      &:before {
        content: "";
        height: 23px;
        width: 23px;
        background: url(${props.$icon});
      }
    `}

  ${(props) =>
    props.$isPrimary
      ? css`
          border: none;
          background: linear-gradient(90deg, #5a308a 0%, #3b7bb9 100%);
        `
      : css`
          border: 1px solid #5a308a;
          background: #030511;
        `}

  ${mobile(css`
    height: 30px;
    padding: 0px 8px;
    gap: 5px;
  `)}
`;
