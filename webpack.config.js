const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared',
        },
        print: {
            import: './src/print.js',
            dependOn: 'shared',
        },
        shared: 'lodash',
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Output Management',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/js'),
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/i,
    //             use: ['style-loader', 'css-loader'],
    //         },
    //         {
    //             test: /\.(png|svg|jpg|jpeg|gif)$/i,
    //             type: 'asset/resource',
    //         },
    //         {
    //             test: /\.(woff|woff2|eot|ttf|otf)$/i,
    //             type: 'asset/resource',
    //         },
    //     ],
    // },

};
