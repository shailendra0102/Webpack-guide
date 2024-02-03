const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.jsx',
    mode: "development",
    module:{
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}