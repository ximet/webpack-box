const path = require('path');

/**
 * Function which create object output point and context
 * @param  {string} file - name file with result bundle
 * @param  {string} folder - name folder with result bundle
 * @returns {object}
 */
const outputPoint = (file, folder) => {
    const currentFile = file || 'bundle.js';
    const currentFolder = folder || 'dist';
    
    return {
        path: path.join(__dirname, currentFolder),
        publicPath: currentFolder,
        filename: currentFile
    }
}

module.exports = {
    outputPoint
}