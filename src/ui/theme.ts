import { DefaultTheme } from 'styled-components';

const spacingUnit = 8;

const palette = {
  colors: [
    '#2E382E', // JET
    '#96BDC6', // DARK SKY BLUE
    '#FCFCFC', // BABY POWDER
    '#EFEFEF', // ISABELLINE
    '#FCD0A1', // PEACH
  ],
};

export const theme: DefaultTheme = {
  colors: {
    primary: palette.colors[4],
    primaryText: palette.colors[0],
    card: palette.colors[2],
    main: palette.colors[3],
    footer: palette.colors[0],
    footerText: palette.colors[2],
  },
  palette,
  spacing(...args) {
    if (args.length > 4) {
      throw new Error('Arguments max length must be 4');
    }
    return `${args.map(f => f * spacingUnit).join('px ')}px`;
  },
};
