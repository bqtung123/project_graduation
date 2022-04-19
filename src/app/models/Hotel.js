const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Hotel = new Schema(
    {
        hotel_id: { type: String },
        hotel_name: { type: String },
        hotel_addr: { type: String },
        hotel_imagelink: { type: String },
    },

    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Hotel', Hotel);
