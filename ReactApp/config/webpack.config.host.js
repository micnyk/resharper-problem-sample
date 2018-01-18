const path = require('path');

process.env.NODE_ENV = 'production';

var reactScriptsConfig = require('./webpack.config.prod');

module.exports = Object.assign({}, reactScriptsConfig, {
    output: Object.assign({}, reactScriptsConfig.output, {
        path: path.join(__dirname, '../../', 'wwwroot')
    })
});