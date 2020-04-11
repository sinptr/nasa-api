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
      secondary: string;
      secondaryText: string;
      card: string;
    };
    spacing: (...args: number[]) => string;
  }
}
