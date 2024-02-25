import { Configuration } from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin');
import path from 'path';

const baseConfiguration: Configuration = {
  target: 'web',
  entry: {
    index: path.join(__dirname, 'src/renderer/entry/index.tsx'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/renderer/index.html')
    }),
  ]
};

export default baseConfiguration;
