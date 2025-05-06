const { getDefaultConfig } = require('@react-native/metro-config')
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config')

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    assetExts: [],
    sourceExts: [],
  },
}

const defaultConfig = getDefaultConfig(__dirname)

config.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
  ext => ext !== 'svg',
)
config.resolver.sourceExts = [...defaultConfig.resolver.sourceExts, 'svg']

module.exports = wrapWithReanimatedMetroConfig(defaultConfig, config)
