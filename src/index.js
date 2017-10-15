const entryPoint = require('entryPoint.js');
const outputPoint = require('outputPoint.js');

/* Example interface for webpack-box */
module.exports = {
    entry: entryPoint(param1, param2),
    output: outputPoint(param1, param2),
    module: getLoaders(param1, param2) 
}

