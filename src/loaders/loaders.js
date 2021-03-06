/**
 * Function which create loader object
 * @param  {string} typeLoader - name loader
 * @param  {array} typeFileList - array type files
 * @param  {object} options - object options this loader
 * @returns {object}
 */
const getLoader = (typeLoader, typeFileList, options) => {
    const regularTest = `/\.(${typeFileList
                            .map(item => `${item}|`)
                            .join()})$/`
    return {
      test: regularTest,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: typeLoader,
        options: options
      }
    };
}

module.exports = {
    getLoader
}