import React from 'react';
import propTypes from 'prop-types';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import MuiThemeProvider from 'components/MuiThemeProvider';
import theme from 'contexts/theme';
import AlertContext from 'contexts/alert';

export const cache = createCache({ key: 'css', prepend: true });

const ContextProviders = ({ alertState, children }) => (
  <CacheProvider value={cache}>
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <AlertContext.Provider value={alertState}>
          {children}
        </AlertContext.Provider>
      </MuiThemeProvider>
    </ThemeProvider>
  </CacheProvider>
);

ContextProviders.propTypes = {
  alertState: propTypes.any.isRequired,
  children: propTypes.any.isRequired,
};

export default ContextProviders;
