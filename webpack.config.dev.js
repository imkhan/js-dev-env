import path from 'path'

export default {
  mode: 'development',
  // devtool is to tell webpack if and how source maps are generated
  devtool: 'eval-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  }
}