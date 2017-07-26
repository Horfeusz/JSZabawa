'use strict';
/*
import { version as loggerVersion } from './index2.js';
import Logger from './index2.js';
*/

const Logger = require('./bundle').default;
const version = require('./bundle').version;

Logger.info('Wersja: '.concat(version()));

Logger.success('Logger działa');
Logger.warning('Ostrzeżenie');
Logger.error('Jakiś babol');
Logger.info('Koniec zabawy');





