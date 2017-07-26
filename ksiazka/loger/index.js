/* eslint no-console: 0 */

'use strict';

var chalk = require('chalk')
    , Logger = {
        success: function (msg) {
            console.log(chalk.green.bold('OK: '), msg);
        },
        error: function (msg) {
            console.error(chalk.red.bold('Error: '), msg);
        },
        warning: function (msg) {
            console.warn(chalk.yellow.bold('Warning: '), msg);
        },
        info: function (msg) {
            console.log(chalk.blue.bold('Info: '), msg);
        }
    };


module.exports = Logger;
