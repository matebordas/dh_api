var Q = require("q");
var mysql = require('mysql');
var conf = require('../conf');

module.exports = {

    connectionPool: null,

    initConnection: function() {
        this.connectionPool = mysql.createPool({
            host: conf.dbHost,
            user: conf.dbUser,
            password: conf.dbPassword,
            database: 'dh_api_db',
            connectionLimit: 10
        });
    },

    executeQuery: function (sqlText) {
        var deferred = Q.defer();

        if (this.connectionPool === null) {
            this.initConnection()
        }

        this.connectionPool.getConnection(function(err, connection) {
            if (err) {
                console.log("Error getting a connection. " + err);
                deferred.reject(err);
            } else {

                // make the query
                connection.query(sqlText, function (err, results) {
                    connection.release();

                    if (err) {
                        console.log("Error querying the database. " + err);
                        deferred.reject(err);
                    } else {
                        deferred.resolve(results);
                    }
                });
            }
        });

        return deferred.promise;
    }
};