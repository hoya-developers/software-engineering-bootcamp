import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const Query: React.FC = () => {
  interface PostInterface {
    id: number;
    userId: number;
    title: string;
    body: string;
  }

  const [data, setData] = useState<PostInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const res = await response.json();
        setLoading(false);
        console.log(res);
        setData(res);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("no clue what went wrong lmfoa");
        }
      }
    };

    makeRequest();
  }, []);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {data && <Post text={data.body} id={data.id} />}
      {error && <h1>{error}</h1>}
      {/* <Post text={data.body} id={data.id} /> */}
    </div>
  );
};

export default Query;
