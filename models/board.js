const mongoose = require('mongoose');
const {v4: uuidv4} = require('uuid');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
    id: {type: String, default: uuidv4()},
    title: {type: String},
    content: {type: String},
    user: {type: String},
    date: {type: Date},
    comment: [commentSchema]
});

const commentSchema = new Schema({
    id: {type: String, default: uuidv4()},
    user: {type: String},
    date: {type: Date},
    content: {type: String}    
});

module.exports.boardSchema = boardSchema;
module.exports.commentSchema = commentSchema;