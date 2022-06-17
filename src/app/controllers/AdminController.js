const Hotel = require('../models/Hotel');
const Comment = require('../models/Comment');
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose');
const { spawn } = require('child_process');


class AdminController {

    show(req, res, next){
        Hotel.find({})
            .then((hotels) =>
                res.render('admin/show', {
                    items: multipleMongooseToObject(hotels),
                }),
            )
            .catch(next);
    }

    crawlHotel(req, res, next) {
        const child = spawn('scrapy', ['crawl', 'list'], {
            cwd: 'C:/Users/FPTSHOP/OneDrive - Hanoi University of Science and Technology/Desktop/project/hotel',
        });

        child.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        child.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        });

        child.on('error', (error) => console.log(`error: ${error.message}`));

        child.on('close', (code) => {
            console.log(`Crawling data closed with code ${code}`);
            next();
        });
    }

    complete(req, res, next) {
        console.log('Crawl completed!');
        res.redirect('/admin');
    }

    comment(req, res, next){
        Comment.find({hotel_name: req.params.key})
            .then((comments) =>
                res.render('admin/comment', {
                    items: multipleMongooseToObject(comments),
                }),
            )
            .catch(next);
    }

    
}

module.exports = new AdminController();
