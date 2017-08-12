const { getLoader } = require('./loader.js');

const imageURLLoader = () => getLoader('url-loader', ['png', 'jpg', 'gif'], {});
const imageFileLoader = () => getLoader('file-loader', ['png', 'jpg', 'gif'], {});

module.exports = {
    imageURLLoader,
    imageFileLoader
}