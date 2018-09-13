const webpack = require('webpack');
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production'
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const indexHtml = path.join(__dirname, "src", "index.html");
const rootPath = path.resolve(__dirname, './');
const publicPath = path.resolve(__dirname, './build');
const ASSET_PATH = process.env.ASSET_PATH || '/';

let pathsToClean = [
  'build'
]

let cleanOptions = {
  root:     rootPath,
  exclude:  [],
  verbose:  true,
  dry:      false
}

module.exports = {
  context: rootPath,
  entry: [
    './src/index.js',
    indexHtml
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: publicPath
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: 'env'
        }
      },
      {
        test: indexHtml,
        use: [
          {
            loader: "file-loader",
            options: {
                name: "[name].[ext]",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "html-loader",
            options: {
                attrs: ["img:src", "link:href"],
                interpolate: true,
            },
          },
        ],
      },
      {
        test: /\.(scss|css|sass)$/,
        loaders: [
          {
            loader: "file-loader",
            options: {
              name: 'css/[name].[ext]'
            }
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap:true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap:true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
              sourceMapContents: true,
              includePaths: [
                path.resolve(__dirname, './node_modules')
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/assets/browserconfig.xml',
        to: 'assets/brovserconfig.xml',
        toType: 'file'
      }
    ]),
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
  ],
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    contentBase: './build',
    port: 8081,
    open: false,
    proxy: {
      "/": "http://localhost:3000"
    }
  }
};
