const express = require("express");
const Post = require("../models/blogPost");

const PostRouter = express.Router();

PostRouter.get("/", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({
      posts
    });
  } catch (e) {
    console.error(e);
    res.status(500).send("Internal Server Error!");
  }
})
  
  .post("/",  async (req, res) => {
    try {
      console.log(req.body);
      const { title, content, authorId } = req.body;
      const result = await new Post({
        title,
        content,
        author: authorId
      }).save();
      res.status(200).json({
        result
      });
    } catch (e) {
      console.error(e);
      res.status(500).send("Internal Server Error!");
    }
  });

module.exports = PostRouter;
