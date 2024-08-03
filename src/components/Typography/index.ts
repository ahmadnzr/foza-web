import styled, { css } from "styled-components";
import { mobile } from "../../helpers/theme/breakpoint";

export * from "./Text";
export * from "./Heading";

export const SectionLabel = styled.h3`
  font-size: ${(props) => props.theme.fontSize.md};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(180deg, #b07cec 21.25%, #3b7bb9 79.93%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${mobile(css`
    font-size: ${(props) => props.theme.mobile.fontSize.md};
  `)}
`;

export const SectionTitle = styled.h1`
  align-self: stretch;
  font-size: ${(props) => props.theme.fontSize.lg};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  line-height: normal;

  ${mobile(css`
    font-size: ${(props) => props.theme.mobile.fontSize.lg};
  `)}
`;
