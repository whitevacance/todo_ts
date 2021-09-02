import React from 'react';
import propTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';

const MuiThemeProvider = ({ theme, children }) => (
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </StylesProvider>
);

MuiThemeProvider.defaultProps = {
  theme: {},
};
MuiThemeProvider.propTypes = {
  theme: propTypes.object,
  children: propTypes.any.isRequired,
};

export default MuiThemeProvider;
