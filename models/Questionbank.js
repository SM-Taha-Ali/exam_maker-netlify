const mongoose = require('mongoose');
const { Schema } = mongoose;

const QustionBankSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
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
    section: {
        type: String,
        required: true
    },
    marks: {
        type: String,
        required: true
    },
    qno: {
        type: Number,
        required: true
    },
    isSection: {
        type: Boolean,
        default: false
    }
})

const QuestionBank = mongoose.model('QuestionBank.js', QustionBankSchema)

module.exports = QuestionBank;
