const Hotel = require('../models/Hotel');
const Comment = require('../models/Comment');
const Source = require('../models/Source');
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose');

const ITEMS_PER_PAGE = 2;
const ITEMS_PER_PAGE_1 = 8;
class SiteController {
    index(req, res) {
        res.render('home');
    }
    async search(req, res, next) {
        const page = +req.query.page || 1;
        console.log(req.query.hotel);
        const source = await Source.find({}).lean();
        const hotels = await Hotel.find({}).lean();
        for (let i = 0; i < hotels.length; i++) {
            hotels[i].source_list = [];
            let hotel_id = hotels[i].hotel_id.toString();

            const sources = source.filter((e) => e.hotel_id.toString() === hotel_id);

            hotels[i].source_list = hotels[i].source_list.concat(sources);
        }

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
        const hotel = await Hotel.findOne({ hotel_id: req.params.id }).lean();
        const query = { hotel_id: req.params.id };
        if (req.query.source_id) {
            query.source_id = req.query.source_id;
        }
        console.log(query);
        const sources = await Source.find(query).lean();
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
                    sources: sources,
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
}

module.exports = new SiteController();
