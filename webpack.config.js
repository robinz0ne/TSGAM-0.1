let path = require('path');

let conf = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                 test: /\.tsx?$/, 
                 loader: "ts-loader" ,
                 exclude: '/node_modules/'
                }
        ]
    },
    externals: {
        "oimo": true,
        "cannon": true,
        "earcut": true
    },
    performance: { hints: false }
};

module.exports = conf;