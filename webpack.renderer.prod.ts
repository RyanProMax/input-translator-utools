import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import path from 'path';

import baseConfiguration from './webpack.renderer.base';

const devConfiguration: Configuration = {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    path: path.join(process.cwd(), 'build'),
    filename: '[name].js',
  }
};

export default merge(baseConfiguration, devConfiguration);
