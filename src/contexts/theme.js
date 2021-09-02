import { createTheme } from '@material-ui/core/styles';
import media from 'constants/media';
import { isCat } from 'libs/getEnv';

const themeObject = {
  breakpoints: {
    values: media,
  },
  overrides: {
    MuiIconButton: {
      root: {
        color: 'inherit',
      },
    },
    MuiTypography: {
      h1: {
        fontSize: '1.8rem',
      },
      h2: {
        fontSize: '1.6rem',
      },
      h3: {
        fontSize: '1.4rem',
      },
      h4: {
        fontSize: '1.2rem',
      },
      h5: {
        fontSize: '1.2rem',
      },
      h6: {
        fontSize: '1.2rem',
      },
    },
  },
  palette: {
    primary: {
      main: 'rgba(255, 81, 82, 1)',
      dark: 'rgba(226, 79, 80, 1)',
    },
    secondary: {
      contrastText: 'rgba(255, 81, 82, 1)',
      main: 'rgba(255, 241, 242, 1)',
      dark: 'rgba(255, 213, 214, 1)',
    },
    info: {
      light: 'rgba(162, 0, 199, 1)',
      main: 'rgba(0, 115, 233, 1)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 1)',
      secondary: 'rgba(60, 60, 67, 0.6)',
    },
    grey: {
      // fillsLight4QuaternaryFillColor
      50: 'rgba(244, 244, 245, 1)',
      // fillsLight3TertiaryFillColor
      100: 'rgba(238, 238, 239, 1)',
      // fillsLight2SecondaryFillColor
      200: 'rgba(233, 233, 234, 1)',
      // fillsLight1PrimaryFillColor
      300: 'rgba(228, 228, 230, 1)',
      // labelsLight4QuaternaryLabelColor
      // 400: 'rgba(60, 60, 67, 0.18)',
      400: 'rgba(220, 220, 221, 1)',
      // black 투명도 0.3, 보더 0.5px 일 때
      500: 'rgba(207, 207, 208, 1)',
      // labelsLight3TertiaryLabelColor
      // 600: 'rgba(60, 60, 67, 0.3)',
      600: 'rgba(196, 196, 198, 1)',
      // labelsLight2SecondaryLabelColor
      // 700: 'rgba(60, 60, 67, 0.6)',
      700: 'rgba(138, 138, 142, 1)',
      // tintsDisabledLight
      800: 'rgba(153, 153, 153, 1)',
      // labelsLight1PrimaryLabelColor(opacity 0.3, 두께 0.5)
      // 900: 'rgba(0, 0, 0, 0.3)',
      900: '#cfcfd0',

      // PC용 grey scale : A100 ~ A400
      // lineLightWhiteBG
      // A100: '#ebebeb',
      A100: 'rgba(235, 235, 235, 1)',
      // lineLightGreyBG
      // A200: '#cfcccc',
      A200: 'rgba(207, 204, 204, 1)',
      // A400, A700은 아직 쓰지 않는 팔레트
      A400: '#303030',
      A700: '#616161',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: ['Noto Sans KR', 'sans-serif'].join(','),
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
};

const catTheme = (commonTheme) => ({
  ...commonTheme,
  palette: {
    ...commonTheme.palette,
    primary: {
      main: 'rgba(162, 0, 199, 1)',
      dark: 'rgba(117, 2, 143, 1)',
    },
    secondary: {
      contrastText: 'rgba(162, 0, 199, 1)',
      main: 'rgba(248, 235, 251, 1)',
      dark: 'rgba(241, 215, 247, 1)',
    },
    info: {
      light: 'rgba(255, 81, 82, 1)',
      main: 'rgba(0, 115, 233, 1)',
    },
  },
});

const theme = isCat ? catTheme(themeObject) : themeObject;

export default createTheme(theme);
