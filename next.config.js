/* eslint-disable */
const path = require('path');

module.exports = {
  // 주소가 /post/2 인 페이지를 /post/2.html이 아닌 /post/2/index.html로 생성
  trailingSlash: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // 폴리필
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      const polyfill = path.resolve(__dirname, 'polyfills.js');
      if (entries['main.js'] && !entries['main.js'].includes(polyfill)) {
        entries['main.js'].unshift(polyfill);
      }
      return entries;
    };

    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    [
      'api',
      'components',
      'containers',
      'libs',
      'pages',
      'mocks',
      'constants',
      'contexts',
    ].forEach((aliasPath) => {
      config.resolve.alias[aliasPath] = path.resolve(
        __dirname,
        `src/${aliasPath}`
      );
    });

    return config;
  },
};
