import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

//  CREATE POST

router.post("/", async (req, res, next) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    next(err);
  }
});

// // GETALL

router.get("/", async (req, res, next) => {
  try {
    const allPosts = await Post.find();
    res.status(200).json(allPosts);
  } catch (err) {
    next(err);
  }
});

export default router;
