const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MinCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        static: path.resolve(__dirname, "dist"),
        port: 9000,
        open: true,
        historyApiFallback: true
    },
    plugins: [
        new ESLintPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new MinCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                exclude: path.resolve(__dirname, "node_modules"),
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: "defaults"
                                    }
                                ],
                               "@babel/preset-react" 
                            ]
                        }
                    },
                    {
                        loader: "eslint-loader",
                        options: {
                            fix: true
                        }
                    }
                ]
            },
           {
            test: /\.css$/,
            use: [
                MinCssExtractPlugin.loader, 
                "css-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [["postcss-preset-env", {}]]
                        }
                    }
                }
            ]
           },
           {
            test: /\.s[ac]ss$/,
            use: [
                MinCssExtractPlugin.loader, 
                "css-loader", 
                "sass-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [["postcss-preset-env", {}]]
                        }
                    }
                }
            ]
           },
           {
            test: /\.(jpg|png|jpeg|gif)$/,
            type: "asset/resource"
           } 
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
}