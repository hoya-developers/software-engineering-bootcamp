import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import useFetch from "../hooks/UseFetch";

const Query: React.FC = () => {
  interface PostInterface {
    id: number;
    userId: number;
    title: string;
    body: string;
  }

  const { data, loading, error } = useFetch<PostInterface>(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  const {
    data: data2,
    loading: loading2,
    error: error2,
  } = useFetch<PostInterface[]>("https://jsonplaceholder.typicode.com/posts/");

  if (error2) {
    return <h1>{error2.message}</h1>;
  }

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {data && <Post text={data.body} id={data.id} />}
      {/*explain how i found error.message */}
      {error && <h1>{error.message}</h1>}
      {/* talk about truthy and falsh */}
      {!!loading2 ? <div>loading </div> : <div>not loading</div>}
      {data2 && data2.map((post) => <Post text={post.body} id={post.id} />)}
    </div>
  );
};

export default Query;
