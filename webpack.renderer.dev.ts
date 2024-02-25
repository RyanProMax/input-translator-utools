import { Configuration } from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { merge } from 'webpack-merge';

import baseConfiguration from './webpack.renderer.base';

const devConfiguration: Configuration & WebpackDevServer.Configuration = {
  mode: 'development',
  devServer: {
    port: 9527,
    hot: true,
    open: true,
  }
};

export default merge(baseConfiguration, devConfiguration);
