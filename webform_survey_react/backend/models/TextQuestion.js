const mongoose = require('mongoose');

const TextQuestionSchema = new mongoose.Schema({
    question_text: {
        type: 'string',
        required: true
    },
    answer: {
        type: 'string'
    }
})

module.exports = mongoose.model('TextQuestion', TextQuestionSchema, 'Responses');
