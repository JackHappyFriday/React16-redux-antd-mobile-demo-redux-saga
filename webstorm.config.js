const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}
module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less', '.css'],
    alias: {
      '@': resolve('src'),
      '@assets': resolve('src/assets'),
      '@page': resolve('src/page'),
      '@components': resolve('src/components'),
      '@constants': resolve('src/constants'),
      '@api': resolve('src/redux/api'),
      '@router': resolve('src/router'),
      '@action': resolve('src/redux/action'),
      '@utils': resolve('src/utils'),
      '@history': resolve('src/redux/history.js'),
    },
  },
};
