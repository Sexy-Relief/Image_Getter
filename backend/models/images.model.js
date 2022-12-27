const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    image_: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const Image_ = mongoose.model('Image_', imageSchema);

module.exports = Image_;