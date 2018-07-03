const path = require('path');
const CLIENT_DEST = path.join(__dirname, './client/dist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    watch: true,
    mode: 'development',
    entry: './client/src/index.js',
    output: { path: CLIENT_DEST, 
        filename: 'bundle.js' 
            },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'env', 'react' ]
                    }
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [ 'env', 'react', ],
                  },
                },
              },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
                exclude: "/node_modules"
            },
            {
                test: /\.(pdf|gif|png|jpe?g|svg)$/,
                use: {
                  loader: "file-loader",
                  options: {
                    name: "[path][name].[hash].[ext]",
                  },
                },
            },
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.scss$/,
                    /\.json$/,
                    /\.(pdf|gif|png|jpe?g|svg)$/,
                ],
                loader: require.resolve('file-loader'),
                options: {
                    name: 'static/media/[name].[ext]'
                }
            }
        ]
    },
    node: {
        __dirname: true,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
    ,
    plugins: [
        new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }),
    ]
}