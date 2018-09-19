const mongoose = require('mongoose');
const {Schema} = mongoose;
//Creating a schema model for category information to POST to the database
const videoSchema = new Schema({
    category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    title: {type: String},
    video: {type: String},
},{timestamps: {createdAt: 'createdAt'}});

module.exports = mongoose.model('Video', videoSchema);//Exporting the model to be available to routes