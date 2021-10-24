const path = require('path')

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      ui_components: path.resolve(__dirname, 'src/components/ui/index.ts'),
      components: path.resolve(__dirname, 'src/components/stated/index.ts'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      icons: path.resolve(__dirname, 'src/components/icons/index.ts'),
      features: path.resolve(__dirname, 'src/features'),
      pages: path.resolve(__dirname, 'src/pages/index.ts'),
      state: path.resolve(__dirname, 'src/state'),
      styles: path.resolve(__dirname, 'src/styles'),
    },
  }

  return config
}
