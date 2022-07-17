const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://Surya_Sastry:BtqNGO7mapnj2kPb@cluster0.6stef.mongodb.net/webformBackend?retryWrites=true&w=majority"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo");
    });
};

module.exports = connectToMongo 