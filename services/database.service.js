var Q = require("q");
var mysql = require('mysql');

module.exports = {

    connection: null,

    executeQuery: function (queryText) {


        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'dbuser',
            password: 's3kreee7'
        });

        connection.connect()

        connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
            if (err) throw err

            console.log('The solution is: ', rows[0].solution)
        })

        connection.end()
    }
}