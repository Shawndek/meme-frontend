import React from "react";
import Post from "./Post";

const Posts = ({ memes, value }) => {
  console.log('value:', value)
  console.log('posts', memes.filter(meme=>meme.category===value))
  return (
    <div className="d-flex p-2 flex-row justify-content-around flex-wrap"> 
      {memes.filter(meme=>meme.category===value).map((meme, id) => (
               <Post meme={meme} key={id} />
            ))}{" "}
      {value === 'All'&&
      memes.map((meme, id) => (
        <Post meme={meme} key={id} /> ))}
      <div className="p-2"></div>
    </div>
  );
};

export default Posts;
