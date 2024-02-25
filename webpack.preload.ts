import { Configuration } from 'webpack';
import path from 'path';

const configuration: Configuration = {
  mode: 'production',
  target: 'node',
  entry: {
    preload: path.join(__dirname, 'src/preload.ts'),
  },
  output: {
    path: path.join(process.cwd(), 'build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map',
};

export default configuration;
