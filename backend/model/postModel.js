const mongoose = require('mongoose')
const { stringify } = require('querystring')

const postSchema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  post_title : {
    type: String,
    required: [true, 'Please fill all fields']
  },
  post_content : {
    type: String,
    required: [true, 'Please fill all fields']
  },

}, {
  timestamps: true,
})

module.exports = mongoose.model('Post',postSchema);