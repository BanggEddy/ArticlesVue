const mongoose = require('mongoose');

const ArticleModel = new mongoose.Schema({
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

module.exports = mongoose.model('articles', ArticleModel);

