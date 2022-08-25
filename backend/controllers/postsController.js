const asyncHandler = require('express-async-handler')


const POSTS = require('../model/postModel')
const User = require('../model/userModel')


// GET /api/posts - get posts
const getPosts = asyncHandler(async (req,res) => {

  const get_posts = await POSTS.find({user: req.user.id});

  res.status(200).json(get_posts);
})

// POST /api/posts - set posts
const setPost = asyncHandler(async (req,res) => {
  if(!req.body.post_title){
    res.status(400)
    throw new Error('Please add post title')
  }

  const set_post = await POSTS.create({
    post_title: req.body.post_title,
    post_content: req.body.post_content,
    user: req.user.id
  })

  res.status(200).json(set_post);
})

// PUT /api/posts/:id - Update post
const updatePost = asyncHandler( async (req,res) => {

  const update_post = await POSTS.findById(req.params.id)

  if(!update_post) {
    res.status(400)
    throw new Error('Post does not exists')
  }

  const user = await User.findById(req.user.id)

  if(!user){
    res.status(401)
    throw new Error('User not found')
  }

  if(updatePost.user.toString() !== user.id){
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedPost = await POSTS.findByIdAndUpdate(req.params.id, req.body, {new: true})

  res.status(200).json(updatedPost);
})

// DELETE /api/posts/:id - Delete post
const deletePost = asyncHandler(async (req,res) => {

  const del_post = await POSTS.findById(req.params.id)

  if(!del_post) {
    res.status(400)
    throw new Error('Post does not exists')
  }

  const user = await User.findById(req.user.id)

  if(!user){
    res.status(401)
    throw new Error('User not found')
  }

  if(del_post.user.toString() !== user.id){
    res.status(401)
    throw new Error('User not authorized')
  }

  await del_post.remove();

  res.status(200).json(req.params.id);
})

module.exports = {
  getPosts,
  setPost,
  updatePost,
  deletePost
};