const { AuthenticationError, UserInputError } = require("apollo-server");
const Posts = require("../../models/post");
const checkAuth = require("../../utils/check-auth");

module.exports = {
  Query: {
    async getPosts() {
      try {
        const posts = await Posts.find().sort({ createdAt: -1 });
        return posts;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getPost(_, { postId }) {
      try {
        const post = await Posts.findById(postId);
        if (post) {
          return post;
        } else {
          throw new Error("Post not found");
        }
      } catch (error) {
        throw new Error("Error fetching post", { error });
      }
    },
  },

  Mutation: {
    async updatePost(_, { postId, title, body }, context) {
      try {
        const post = await Posts.findByIdAndUpdate(
          postId,
          { title, body }        );
        return post;
      } catch (error) {
        throw new UserInputError("Post doesnt exist");
      }
    },
    async createPost(_, { title, body }, context) {
      if (body.trim() === "") {
        throw new Error("Post body must not be empty");
      }
      const newPost = new Posts({
        title,
        body,
        createdAt: new Date().toISOString(),
      });
      const post = await newPost.save();
      return post;
    },
    async deletePost(_, { postId }, context) {
      try {
        const post = await Posts.findById(postId);
        await post.delete();
        return "Post deleted successfully";
      } catch (error) {
        throw new Error(error);
      }
    },
    async likePost(_, { postId }, context) {
      const { username } = checkAuth(context);
      const post = await Posts.findById(postId);
      if (post) {
        // post already liked, unlike it
        if (post.likes.find((like) => like.username === username)) {
          post.likes = post.likes.filter((like) => like.username !== username);
        } else {
          // like post
          post.likes.push({
            username,
            createdAt: new Date().toISOString(),
          });
        }
        await post.save();
        return post;
      } else throw new UserInputError("Poes doesnt exist");
    },
  },
};
