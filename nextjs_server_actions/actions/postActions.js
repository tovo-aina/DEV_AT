"use server";

import connectDB from "../database/mongodb";
import Post from "../models/postModel";

connectDB();

export async function getAllPosts() {
  try {
    const posts = await Post.find();

    const newData = posts.map((post) => ({
      ...post._doc,
      _id: post._doc._id.toString(),
    }));

    return { posts: newData };
  } catch (error) {
    throw new Error(error.message || "Faied to create post!");
  }
}
