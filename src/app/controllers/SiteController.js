const Hotel = require('../models/Hotel');
const Comment = require('../models/Comment');
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose');

const ITEMS_PER_PAGE = 5;
const ITEMS_PER_PAGE_1 = 8;
class SiteController {
    index(req, res, next) {
        res.render('home');
        next();
    }
    async search(req, res, next) {
        const page = +req.query.page || 1;
        console.log(req.query.hotel);

        const hotels = await Hotel.find({}).lean();

        const resultHotels = hotels.filter(
            (e) => e.hotel_name.toLowerCase().indexOf(req.query.hotel.toLowerCase()) !== -1,
        );

        let totalItems = resultHotels.length;
        let resultHotelsOnPage = resultHotels.slice(
            (page - 1) * ITEMS_PER_PAGE_1,
            (page - 1) * ITEMS_PER_PAGE_1 + ITEMS_PER_PAGE_1,
        );
        res.render('list_hotel', {
            hotels: resultHotelsOnPage,
            totalItems: totalItems,
            currentPage: page,
            hasNextPage: ITEMS_PER_PAGE_1 * page < totalItems,
            hasPreviousPage: page > 1,
            nextPage: page + 1,
            previousPage: page - 1,
            lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE_1),
        });
    }

    async show(req, res, next) {
        const page = +req.query.page || 1;
        const hotel = await Hotel.findOne({ _id: req.params.id }).lean();
        let query;
        if (hotel.hasOwnProperty('hotel_id')) query = { hotel_id: hotel.hotel_id };
        else query = { hotel_name: hotel.hotel_name };
        console.log(query);
        let totalItems;
        Comment.find(query)
            .countDocuments()
            .then((numProducts) => {
                totalItems = numProducts;
                return Comment.find(query)
                    .skip((page - 1) * ITEMS_PER_PAGE)
                    .limit(ITEMS_PER_PAGE);
            })
            .then((comments) => {
                res.render('hotel/show', {
                    comments: multipleMongooseToObject(comments),
                    hotel: hotel,
                    currentPage: page,
                    hasNextPage: ITEMS_PER_PAGE * page < totalItems,
                    hasPreviousPage: page > 1,
                    nextPage: page + 1,
                    previousPage: page - 1,
                    lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE),
                });
            })
            .catch(next);
    }

    log(req, res, next) {
        console.log(' Hello World ');
    }
}

module.exports = new SiteController();
