const { alias } = require('react-app-rewire-alias');


module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@common': 'src/common',
    '@theme': 'src/theme',
    '@privatePages': 'src/pages/PrivatePages',
    '@app': 'src/app',
    '@features': 'src/features',
    '@constants': 'src/constants',
    '@pages': 'src/pages',
    '@utils': 'src/utils'
  })(config)
  return config;
}
