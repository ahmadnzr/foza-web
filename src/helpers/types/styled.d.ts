import "styled-components";

interface FontSize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xlg: string;
}
interface FontWeight {
  normal: number;
  bold: number;
  semiBold: number;
  medium: number;
}

declare module "styled-components" {
  export interface DefaultTheme {
    fontWeight: FontWeight;
    mobile: {
      fontSize: FontSize;
    };
    desktop: {
      fontSize: FontSize;
    };
  }
}
