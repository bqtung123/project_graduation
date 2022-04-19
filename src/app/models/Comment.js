const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema(
    {
        source_id: { type: String },
        source_name: { type: String },
        hotel_id: { type: String },
        comment: { type: Array },
    },

    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Comment', Comment);
