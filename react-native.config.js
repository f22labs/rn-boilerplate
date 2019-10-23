module.exports = {
  dependencies: {
    'react-native-splash-screen': {
      platforms: {
        android: null,
        ios: null,
      },
    },
  },
  project: {
    ios: {},
    android: {}, // grouped into “project”
  },
  assets: ['./app/assets/fonts/'], // stays the same
};
