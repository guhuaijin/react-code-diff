const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle-[hash].js"
    },
    devtool: 'none',
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        inline: true,
        hot: true,
        progress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                // loader: "babel-loader?presets[]=react,presets[]=es2015",
                loader: "babel-loader",
                query:
                    {
                        presets: ["env", "react", "stage-1"],
                        plugins: [
                            [
                                "import",
                                {libraryName: "antd", style: 'css'}
                            ]
                        ]
                    },
            },

            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules",
                exclude: /node_modules/,
            },
            {
                test: /\.css/,
                exclude: /src/,
                use: [
                    {loader: "style-loader",},
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(
            ['dist/*.js'],
            {
                root: __dirname,
                verbose: true,
                dry: false
            }
        )
    ]
};
