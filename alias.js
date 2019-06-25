const path = require('path')
const moduleAliases = require('module-alias')

module.exports = () => {
  moduleAlias.addAlias('react', path.join(__dirname, '..', 'preact', 'compat'))
  moduleAlias.addAlias('react-dom', path.join(__dirname, '..', 'preact', 'compat'))
  moduleAlias.addAlias("react-ssr-prepass", path.join(__dirname, '..', 'preact-ssr-prepass'))
}