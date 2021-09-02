import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import createEmotionServer from '@emotion/server/create-instance';
import WebFont from 'components/WebFont';
import { cache } from './_app';

const { extractCritical } = createEmotionServer(cache);

export default class eventLandingDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          {/* 변하지 않는 head 또는 script 는 이곳에 넣는다. */}
          {/* 예외 : 타이틀은 _app.js (nextjs 규칙) */}
          <meta httpEquiv="X-UA-Compatible" content="IE=EDGE" />
          {/* IE 캐시 방지 */}
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Expires" content="-1" />
          <meta name="format-detection" content="telephone=no" />
          <link
            rel="shortcut icon"
            href="data:image/x-icon"
            type="image/x-icon"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <WebFont />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
eventLandingDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const styles = extractCritical(initialProps.html);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
      <style
        key="emotion-style-tag"
        data-emotion={`css ${styles.ids.join(' ')}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: styles.css }}
      />,
    ],
  };
};
