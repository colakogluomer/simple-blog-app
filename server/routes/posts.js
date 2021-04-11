import express from "express";
const router = express.Router();
import PostService from "../services/posts.js";

router.get("/", async (req, res) => {
  try {
    const posts = await PostService.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  const post = await PostService.add(req.body);
  res.send(post);
  console.log("post created");
});

export default router;
