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
      use: {
        loader: typeLoader,
        options: options
      }
    };
}

const styleLoader = () => getLoader('style-loader', ['css'], {});
const cssLoader = () => getLoader('css-loader', ['css'], {options: {modules: true}})

module.exports = {
    getLoader,
    styleLoader,
    cssLoader
}