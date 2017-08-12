const { getLoader } = require('./loader.js');

const styleLoader = () => getLoader('style-loader', ['css'], {});
const cssLoader = () => getLoader('css-loader', ['css'], {options: {modules: true}})

module.exports = {
    styleLoader, 
    cssLoader
}