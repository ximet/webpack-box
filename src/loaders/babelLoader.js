const { getLoader } = require('./loader.js');

/**
 * Function which create babel-loader object
 * @param  {array} typeFileList - array type files
 * @param  {array} presetsList - array type presets
 * @returns {object}
 */
const getBabelLoader = (typeFileList, presetsList) => {
    const options = {
        presets: presetsList
    };

    return getLoader('babel-loader', typeFileList, options)
}

module.exports = {
    getBabelLoader
}