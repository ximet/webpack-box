/**
 * Function which create babel-loader object
 * @param  {array} typeFileList - array type files
 * @param  {array} presetsList - array type presets
 * @returns {object}
 */
const getBabelLoader = (typeFileList, presetsList) => {
    const regularTest = `/\.(${typeFileList
                            .map(item => `${item}|`)
                            .join()})$/`
    return {
      test: regularTest,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: presetsList
        }
      }
    };
}

module.exports = {
    getBabelLoader
}