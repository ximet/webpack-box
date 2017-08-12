const { getLoader } = require('./loader.js');

const getBabelLoader = (typeFileList, presetsList) => {
    return getLoader('babel-loader', typeFileList, options)
}

module.exports = {
    getBabelLoader
}