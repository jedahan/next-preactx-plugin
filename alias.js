const path = require('path')
const moduleAliases = require('module-alias')

module.exports = () => {
  moduleAliases.addAlias('react', path.join(__dirname, '..', 'preact', 'compat'))
  moduleAliases.addAlias('react-dom', path.join(__dirname, '..', 'preact', 'compat'))
  moduleAliases.addAlias("react-ssr-prepass", path.join(__dirname, '..', 'preact-ssr-prepass'))
}