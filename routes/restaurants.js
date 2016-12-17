var express = require('express');
var router = express.Router();
var restaurantService = require('../services/restaurant.service');

/* Filter by city */
router.get('/city/:city/limit/:limit*?', function(req, res) {
    var limit = !!req.params.limit ? req.params.limit: null;

    restaurantService.filterRestaurantsByCity(req.params.city, limit)
        .then(function (result) {
            res.send(result)
        }, function (error) {
            res.send(error);
        });
});

/* Filter by postal zip code */
router.get('/plz/:postalcode/limit/:limit*?', function(req, res) {
    var limit = !!req.params.limit ? req.params.limit: null;

    restaurantService.filterRestaurantsByPlz(req.params.postalcode, limit)
        .then(function (result) {
            res.send(result)
        }, function (error) {
            res.send(error);
        });
});

/* Filter by delivery zip code */
router.get('/deliveryzip/:areacode/limit/:limit*?', function(req, res) {
    var limit = !!req.params.limit ? req.params.limit: null;

    restaurantService.filterRestaurantsByDeliveryArea(req.params.areacode, limit)
        .then(function (result) {
            res.send(result)
        }, function (error) {
            res.send(error);
        });
});

/* Filter by city and delivery zip code */
router.get('/city/:city/deliveryzip/:areacode/limit/:limit*?', function(req, res) {
    var limit = !!req.params.limit ? req.params.limit: null;

    restaurantService.filterByCityAndDeliveryArea(
        req.params.city,
        req.params.areacode,
        limit
    ).then(function (result) {
        res.send(result)
    }, function (error) {
        res.send(error);
    });
});

module.exports = router;
