import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      colors: Array<string>;
    };
    colors: {
      primary: string;
      primaryText: string;
      main: string;
      footer: string;
      footerText: string;
    };
    spacing: (factor: number | Array<number>) => string;
  }
}
