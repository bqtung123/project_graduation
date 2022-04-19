const Hotel = require('../models/Hotel');
const Comment = require('../models/Comment');
const Source = require('../models/Source');
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    index(req, res) {
        res.render('home');
    }
    async search(req, res, next) {
        console.log(req.query.hotel);
        const source = await Source.find({}).lean();
        const hotels = await Hotel.find({}).lean();
        for (let i = 0; i < hotels.length; i++) {
            hotels[i].source_list = [];
            let hotel_id = hotels[i].hotel_id.toString();

            const sources = source.filter((e) => e.hotel_id.toString() === hotel_id);
            // for (let j = 0; j < sources.length; j++) {
            //     hotels[i].source_list.push(sources[j]);
            // }
            hotels[i].source_list = hotels[i].source_list.concat(sources);
        }

        const resultHotels = hotels.filter(
            (e) => e.hotel_name.toLowerCase().indexOf(req.query.hotel.toLowerCase()) !== -1,
        );

        res.render('list_hotel', {
            hotels: resultHotels,
        });
    }

    async show(req, res, next) {
        const hotel = await Hotel.findOne({ hotel_id: req.params.id }).lean();
        const query = { hotel_id: req.params.id };
        if (req.query.source_id) {
            query.source_id = req.query.source_id;
        }
        console.log(query);
        const sources = await Source.find(query).lean();
        // res.json(hotel);
        Comment.find(query)
            .then((comments) => {
                res.render('hotel/show', {
                    comments: multipleMongooseToObject(comments),
                    hotel: hotel,
                    sources: sources,
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController();
