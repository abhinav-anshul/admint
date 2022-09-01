import { createTheme, PaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface CustomPalette {
    primaryGreen: PaletteColorOptions;
    secondaryAccentBlue: PaletteColorOptions;
    black: PaletteColorOptions;
    whitePure: PaletteColorOptions;
    whiteOff: PaletteColorOptions;
    primaryLightGreen: PaletteColorOptions;
    accentLightBlue: PaletteColorOptions;
    secondaryTextGray: PaletteColorOptions;
    blueLightBackground: PaletteColorOptions;
    disbaledTextField: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    primaryGreen: true;
    secondaryAccentBlue: true;
    black: true;
    whitePure: true;
    whiteOff: true;
    primaryLightGreen: true;
    accentLightBlue: true;
    secondaryTextGray: true;
    blueLightBackground: true;
    disbaledTextField: true;
  }
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: any) =>
  augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    primaryGreen: createColor('#3fb488'),
    secondaryAccentBlue: createColor('#005fbb'),
    black: createColor('#121a17'),
    whitePure: createColor('#ffffff'),
    whiteOff: createColor('#f4f4f4'),
    primaryLightGreen: createColor('#c9efde'),
    accentLightBlue: createColor('#c3d9ee'),
    secondaryTextGray: createColor('#7d8180'),
    blueLightBackground: createColor('#eef4fa'),
    disbaledTextField: createColor('#f3f3f3'),
  },
});

export default theme;
