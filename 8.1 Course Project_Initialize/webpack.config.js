const path = require("path");

module.exports = {
    entry: {
        index: "./src/index.js",
        courses: "./src/pages/courses.js"
    },
    output: {
       filename: "[name].bundle.js",
       path: path.resolve(__dirname, "dist"),
       clean: true
    },
    devServer: {
        static: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    {loader: "style-loader", options: {}}, 
                    {loader: "css-loader", options: {modules: true}}
                ]
            },
            {
                test: /.s[ac]ss$/,
                use: [
                    {loader: "style-loader", options: {}}, 
                    {loader: "css-loader", options: {modules: true}},
                    {loader: "sass-loader"}
                ]
            }
        ]
    }
}