const siteRouter = require('./site');
const adminRouter = require('./admin');
function route(app) {
    app.use('/', siteRouter);
    app.use('/', adminRouter);
}

module.exports = route;
