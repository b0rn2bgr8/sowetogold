const mongoose = require('mongoose');
const {Schema} = mongoose;
//Creating a schema model for category information to POST to the database
const advertSchema = new Schema({
    summary: {type: String},
    picture: {type: String},
    Url: {type: String},
},{
    timestamps: {createdAt: 'createdAt'}
});

module.exports = mongoose.model('Adverts', advertSchema);//Exporting the model to be available to routes