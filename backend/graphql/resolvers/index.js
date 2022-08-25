const postResolvers = require('./posts');
const commentResolvers=require('./comments')
module.exports = {
  Post:{
    likeCount:(parent)=>parent.likes.length,
    commentCount:(parent)=>parent.comments.length
  },
  Query: {
    ...postResolvers.Query,
  },
  Mutation:{
      ...postResolvers.Mutation,
      ...commentResolvers.Mutation
  }
};
