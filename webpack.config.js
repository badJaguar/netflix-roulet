const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var path = require('path');
var envConfig = require('dotenv');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const App_ENV = process.env.APP_ENV;
const Node_ENV = process.env.NODE_ENV;
const isTest = App_ENV === 'test'
const isProd = App_ENV === 'prod';

const devMode = Node_ENV !== 'production';

function setDevTool() {  // function to set dev-tool depending on environment
    if (isTest) {
        return 'inline-source-map';
    } else if (isProd) {
        return 'source-map';
    } else {
        return 'eval-source-map';
    }
}
if (isProd) {
    envConfig.plugins.push(
        {
            optimization: {
                minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin({})],
            }
        },
        new CopyWebpackPlugin([{
            from: __dirname + '/public'
        }])
    );
};
module.exports = {
    entry: {
        bundle: "./src/index",
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js',
    },
    // mode: "production",
    devtool: setDevTool(),
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".scss", ".css"]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },
    performance: {
        hints: Node_ENV === 'production' ? "warning" : false
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: ['./src/**/*.scss']
                        },
                    },
                ],
            },
            {
                enforce: 'pre',
                exclude: /node_modules/,
                test: /\.jsx?$/,
                use: {
                    loader: 'source-map-loader',
                    options: {
                        emitWarning: true, // @note: only for development
                    },
                },
            },
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                            minimize: true
                        },
                    },
                    'css-loader',
                ],
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html",
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
};
if (isProd) {
    envConfig.plugins.push(
        new UglifyJsPlugin(),
        new CopyWebpackPlugin([{
            from: __dirname + '/public'
        }])
    );
};