var path = require("path")
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']},
            { test: /\.css$/i, use: ['style-loader', 'css-loader']},
            { test: /\.txt$/, use: 'raw-loader' }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
}