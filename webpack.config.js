var path = require("path");
module.exports = {
    entry: {
        app: ["./app/main.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
                test: /bootstrap\/js\//,
                loader: 'imports?jQuery=jquery'
            }, {
                test: /\.css$/,
                loader: "style!css"
            },
            //  {
            //     test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: "url?limit=10000&mimetype=application/font-woff"
            // }, {
            //     test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: "url?limit=10000&mimetype=application/octet-stream"
            // }, {
            //     test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: "file"
            // }, {
            //     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: "url?limit=10000&mimetype=image/svg+xml"
            // },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    }
};
