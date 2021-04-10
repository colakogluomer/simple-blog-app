import PostModel from "../models/posts.js";
import BaseService from "./base-service.js";

class PostService extends BaseService {
  model = PostModel;
}

export default new PostService();
