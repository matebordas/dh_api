var dbService = require('./database.service');

module.exports = {

    setQueryLimit: function(queryString, limit) {
        var limitQuery = ' LIMIT ' + limit;

        var result = queryString;
        if (limit !== null) {
            result = result.concat(limitQuery);
        }

        return result;
    },

    filterRestaurantsByCity: function(cityName, limit) {
        var query = 'SELECT * FROM restaurants WHERE city LIKE "%' + cityName + '%"';
        var queryToExecute = this.setQueryLimit(query, limit);

        return dbService.executeQuery(queryToExecute);
    },

    filterRestaurantsByPlz: function(plz, limit) {
        var query = 'SELECT * FROM restaurants WHERE PLZ LIKE "%' + plz + '%"';

        var queryToExecute = this.setQueryLimit(query, limit);
        return dbService.executeQuery(queryToExecute);
    },

    filterRestaurantsByDeliveryArea: function(areaCode, limit) {
        var query = 'SELECT * FROM restaurants '  +
            'WHERE delivery_zip_1 LIKE "%' + areaCode + '%" '  +
            'OR delivery_zip_2 LIKE "%' + areaCode + '%" '  +
            'OR delivery_zip_3 LIKE "%' + areaCode + '%" '  +
            'OR delivery_zip_4 LIKE "%' + areaCode + '%" '  +
            'OR delivery_zip_5 LIKE "%' + areaCode + '%"';

        var queryToExecute = this.setQueryLimit(query, limit);
        return dbService.executeQuery(queryToExecute);
    },

    filterByCityAndDeliveryArea: function(cityName, areaCode, limit) {
        var query = 'SELECT * FROM restaurants ' +
            'WHERE city LIKE "%' + cityName + '%" ' +
            'AND (delivery_zip_1 LIKE "%' + areaCode + '%" '  +
            'OR delivery_zip_2 LIKE "%' + areaCode + '%" '  +
            'OR delivery_zip_3 LIKE "%' + areaCode + '%" '  +
            'OR delivery_zip_4 LIKE "%' + areaCode + '%" '  +
            'OR delivery_zip_5 LIKE "%' + areaCode + '%")';

        var queryToExecute = this.setQueryLimit(query, limit);
        return dbService.executeQuery(queryToExecute);
    }
};