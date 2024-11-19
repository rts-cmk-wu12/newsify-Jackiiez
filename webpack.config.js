const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    //flere entries så den generere flere js filer baseret på navn
    entry: {
        index: "./app/index.js",
        batman: './app/login.js',
        mainpage: './app/mainpage.js',
         onboarding: './app/onboarding.js'
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.(css|scss)$/i,
                use: ["style-loader", "css-loader","sass-loader"],
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env',
                            { targets: "defaults" }]
                        ]
                    }
                }
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        // dynamisk sti så man ka skrive forskellige sti navne og så vælger den en js fil udfra hva navn man skriver på html siden
        filename: "[name].her-er-noget-javascript.js"
    },
    // plugins: [new HtmlWebpackPlugin()],
    mode: "production"
}