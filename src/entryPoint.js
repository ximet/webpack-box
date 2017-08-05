const path = require('path');

/**
 * Function which create object entry point and context
 * @param  {string} contextFolder - folder where you have own context project
 * @param  {array} entries - array entry points 
 * @returns {object}
 */
const entryPoint = (contextFolder, entries) => {
    let resultObject = {};

    if (!contextFolder || (!entries && entries.length !== 0)) {
        return;
    }
    if (contextFolder !== "") {
        resultObject.context = path.join(__dirname, contextFolder);
    }

    resultObject.entry = entries;

    return resultObject;
}

module.exports = {
    entryPoint
}