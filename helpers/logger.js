const Database = require('./database');
const Log = require('../models/Log');


class Logger {

    static _log(level, message) {

        return new Promise((resolve, reject) => {
            Database.connect().then(
                () => {
                    Log.create({ level, message }, function (err) {
                        if (err) {
                            console.log(err);
                            reject();
                        }
                        else {
                            console.log('Log created');
                            resolve();
                        }
                    });
                }, 
                (err) => {
                    console.log(err);
                    reject();
                })
        });
    }

    static info(message) {
        return this._log('INFO', message);
    }


    static debug(message) {
        return this._log('DEBUG', message);
    }


    static error(message) {
        return this._log('ERROR', message);
    }


    static search(startDate, endDate, level, message, limit) {
        
    }

}

module.exports = Logger;