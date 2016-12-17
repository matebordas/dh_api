var dbService = require('./database.service');

module.exports = {

    filterRestaurantsByCity: function(cityName, limit) {
        return dbService
            .executeQuery('SELECT * FROM restaurants WHERE city LIKE "%' + cityName + '%" LIMIT ' + limit);
    },

    filterRestaurantsByPlz: function(plz, limit) {
        return dbService
            .executeQuery('SELECT * FROM restaurants WHERE PLZ LIKE "%' + plz + '%" LIMIT ' + limit);
    },

    filterRestaurantsByDeliveryArea: function(areaCode, limit) {
        return dbService
            .executeQuery('SELECT * FROM restaurants '  +
                'WHERE delivery_zip_1 LIKE "%' + areaCode + '%" '  +
                'OR delivery_zip_2 LIKE "%' + areaCode + '%" '  +
                'OR delivery_zip_3 LIKE "%' + areaCode + '%" '  +
                'OR delivery_zip_4 LIKE "%' + areaCode + '%" '  +
                'OR delivery_zip_5 LIKE "%' + areaCode + '%" LIMIT ' + limit);
    },

    filterByCityAndDeliveryArea: function(cityName, areaCode, limit) {

        return dbService
            .executeQuery('SELECT * FROM restaurants ' +
                'WHERE city LIKE "%' + cityName + '%" ' +
                'AND (delivery_zip_1 LIKE "%' + areaCode + '%" '  +
                'OR delivery_zip_2 LIKE "%' + areaCode + '%" '  +
                'OR delivery_zip_3 LIKE "%' + areaCode + '%" '  +
                'OR delivery_zip_4 LIKE "%' + areaCode + '%" '  +
                'OR delivery_zip_5 LIKE "%' + areaCode + '%") LIMIT ' + limit);
    }
};