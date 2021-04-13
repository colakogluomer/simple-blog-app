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
  console.log(req.body);
  const post = await PostService.add(req.body);
  res.send(post);
  console.log("post created");
});

router.get("/:id", async (req, res) => {
  const post = await PostService.find(req.params.id);
  res.send(post);
});

router.delete("/:id", async (req, res) => {
  const deletedPost = await PostService.del(req.params.id);

  res.json(deletedPost);
});
router.patch("/:id", async (req, res) => {
  const _id = req.params.id;
  const post = req.body;
  const options = { new: true };
  const updatedPost = await PostService.updateById(_id, post, options);
  res.json(updatedPost);
});

export default router;
