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
    main: palette.colors[3],
    footer: palette.colors[0],
    footerText: palette.colors[2],
  },
  palette,
  spacing(factor = 0) {
    const units = Array.isArray(factor) ? factor : [factor];
    if (units.length > 4) {
      throw new Error('Factor array max length must be 4');
    }
    return `${units.map(f => f * spacingUnit).join('px ')}px`;
  },
};
