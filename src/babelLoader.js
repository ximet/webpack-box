const getBabelLoader = (typeFileArray, presetsList) => {
    const regularTest = `/\.(${typeFileArray
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