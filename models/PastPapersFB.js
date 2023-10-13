const mongoose = require('mongoose');
const { Schema } = mongoose;

const PastpapersFBSchema = new Schema({
    year: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    subParts: {
        type: Array,
        default: []
    },
    paperType: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    }
});

const PastpapersFB = mongoose.model('PastpapersFB', PastpapersFBSchema)

module.exports = PastpapersFB;