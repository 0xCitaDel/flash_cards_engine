const { alias } = require('react-app-rewire-alias');


module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@constants': 'src/constants',
    '@views': 'src/views',
    '@routes': 'src/routes',
    '@utils': 'src/utils'
  })(config)
  return config;
}
