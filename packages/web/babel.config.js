module.exports = function (api) {
  api.cache(true)

  return {
    presets: [
      'next/babel',
      '@zeit/next-typescript/babel'
    ],
    plugins: [
      [
        'module-resolver', {
          'root': ['.'],
          'alias': {
            '@app': './src'
          },
          'extensions': [
            '.ts',
            '.tsx'
          ]
        }
      ]
    ]
  }
}
