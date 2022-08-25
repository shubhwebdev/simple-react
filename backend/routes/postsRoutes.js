const express = require('express');
const router = express.Router()
const {getPosts,setPost,updatePost,deletePost} = require('../controllers/postsController')

const {protect} = require('../middlewares/authMiddleware')

router.route('/').get(protect,getPosts).post(protect,setPost)
router.route('/:id').delete(protect,deletePost).put(protect,updatePost)


module.exports = router;