const mongoose = require('mongoose');
const { Schema } = mongoose;

const PastpapersKBSchema = new Schema({
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
    },
    qno: {
        type: String,
        required: true
    },
    board: {
        type: String,
        required: true
    },
    isSection: {
        type: Boolean,
        default: false
    }
});

const PastpapersKB = mongoose.model('PastpapersKB', PastpapersKBSchema)

module.exports = PastpapersKB;