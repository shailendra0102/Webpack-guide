const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "none",
    module:{
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}