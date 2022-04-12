import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div className="d-flex p-2 flex-row justify-content-around flex-wrap">
      {posts.map((memes, index) => (
        <Post memes={memes} key={index} />
      ))}{" "}
      <div className="p-2"></div>
    </div>
  );
};

export default Posts;
