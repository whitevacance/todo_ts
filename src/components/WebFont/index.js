/* eslint-disable */
import React from 'react';

// 아래 대용으로 웹 폰트 로더를 사용한다.
// render-blocking을 막기 위함
/* <link
href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
rel="stylesheet"
/> */
// 참고
// https://developers.google.com/fonts/docs/webfont_loader

export const FONT = `
    WebFontConfig = {
      google: { families: [ 'Noto+Sans+KR:400,500,700&display=swap' ] }
    };
    (function() {
      var wf = document.createElement('script');
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();
`;
const WEB_FONT = () => (
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: FONT,
    }}
  />
);
export default WEB_FONT;
