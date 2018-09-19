const mongoose = require('mongoose');
const { Schema } = mongoose;
//Creating a schema model for articles information to POST to the database
const articleSchema = new Schema({
    title: { type: String },
    //picture: { type: String, default: null },
    body: { type: String },
    status: { type: String, default: "draft", enum: ["published", "draft"] },
    author: [{ type: Schema.Types.ObjectId, ref: "User" }],
    category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
}, { timestamps: { createdAt: 'createdAt' } });

module.exports = mongoose.model('Article', articleSchema);//Exporting the model to be available to routes