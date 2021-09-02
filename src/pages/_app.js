import React from 'react';
import App from 'next/app';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Global } from '@emotion/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import createCache from '@emotion/cache';
import theme from 'contexts/theme';
import { alert } from 'contexts/alert';
import Alert from 'components/Alert';
import ContextProviders from 'components/ContextProviders';
import '../globalStyles.css';

export const cache = createCache({ key: 'css', prepend: true });

class EventLanding extends App {
  constructor(props) {
    super(props);
    // openAlert과 closeAlert의 공통 부분
    // 주어진 파라미터로 alertState안의 alert 객체를 업데이트
    this.updateAlertObject = (alert = {}) => {
      this.setState((state) => ({
        alertState: {
          ...state.alertState,
          alert: {
            ...state.alertState.alert,
            ...alert,
          },
        },
      }));
    };

    this.openAlert = (props) => {
      if (typeof props === 'string') {
        this.updateAlertObject({
          body: { ...alert.body, title: '', cancel: null, content: props },
          type: 'modal',
          isOpen: true,
          onConfirm: null,
        });
      } else {
        this.updateAlertObject({
          body: props.body,
          type: props.type || 'modal',
          isOpen: true,
          onConfirm: props.onConfirm,
          top: props.top,
        });
      }
    };
    this.closeAlert = () => this.updateAlertObject({ isOpen: false });

    this.state = {
      alertState: {
        openAlert: this.openAlert,
        closeAlert: this.closeAlert,
        alert,
      },
    };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ContextProviders alertState={this.state.alertState}>
        <Head>
          <title>TODO LIST</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
        </Head>
        <CssBaseline />
        <Global
          styles={{
            'html, body': {
              fontFamily: theme.typography.fontFamily,
            },
          }}
        />
        <Component {...pageProps} />
        <Alert
          onClose={this.state.alertState.closeAlert}
          onConfirm={this.state.alertState.alert.onConfirm}
          open={this.state.alertState.alert.isOpen}
          type={this.state.alertState.alert.type}
          body={this.state.alertState.alert.body}
          top={this.state.alertState.alert.top}
        />
      </ContextProviders>
    );
  }
}

EventLanding.defaultProps = {
  router: null,
};
EventLanding.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object,
};

export default EventLanding;
