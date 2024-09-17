const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  namearticle: 
    { 
        type: String, 
        required: true 
    },
  descriptionarticle: 
    { 
        type: String, 
        required: true 
    },
});

const ArticleModelCopy = mongoose.model('articles', articleSchema);

module.exports = ArticleModelCopy;
