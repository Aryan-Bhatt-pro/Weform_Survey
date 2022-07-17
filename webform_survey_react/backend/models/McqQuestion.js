const mongoose = require('mongoose');

const McqQuestionSchema = new mongoose.Schema({
    question_text: {
        type: 'string',
        required: true
    },
    option_value: {
        type: 'string'
    }
});

module.exports = mongoose.model('McqQuestion', McqQuestionSchema);