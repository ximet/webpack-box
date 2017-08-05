const path = require('path');

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