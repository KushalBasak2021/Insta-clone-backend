import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    required: true,
  },
  PostImage: {
    type: String,
  },
  date: {
    type: Date,
  },
});

export default mongoose.model("Post", PostSchema);
