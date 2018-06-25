module.exports = {
  // tell webpack to run babel on every ifle it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react', 'stage-0', ['env', { targets: { browsers: ['last 2 versions'] } }]

          ], "plugins": ["transform-class-properties"]

        }
      }
    ]
  }
}