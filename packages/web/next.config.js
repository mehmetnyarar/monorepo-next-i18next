const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')
const withTypescript = require('@zeit/next-typescript')

module.exports = withPlugins([
  withTM({
    transpileModules: [
      // '@repo/shared'
    ]
  }),
  withTypescript
])
