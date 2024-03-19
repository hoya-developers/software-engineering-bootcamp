import React from "react";

interface PostProps {
  text: string;
  id: number;
}

const Post: React.FC<PostProps> = ({ text, id }) => {
  return (
    <div>
      <h1>Post {id}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Post;
