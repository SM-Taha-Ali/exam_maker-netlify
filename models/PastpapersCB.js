const mongoose = require('mongoose');
const { Schema } = mongoose;

const PastPapersCBSchema = new Schema({

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
    source: {
        type: String,
        required: true
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

const PastpapersCB = mongoose.model("PastPapersCB", PastPapersCBSchema)

module.exports = PastpapersCB












