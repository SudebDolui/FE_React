import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  // const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [changeIdOnButtonClick, setChangeIdOnButtonClick] = useState(1);

  const clickHandler = () => {
    setChangeIdOnButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${changeIdOnButtonClick}`
      )
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [changeIdOnButtonClick]);

  return (
    <div>
      {/* //*This is a controlled Component. */}
      <input
        type={"text"}
        value={id}
        placeholder="Enter an ID"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button onClick={clickHandler}>Fetch Data</button>
      <h4>
        Post Number is: {post.id} and Post Title is: {post.title}
      </h4>
      <ul>
        {/* {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))} 
        */}
      </ul>
    </div>
  );
}

export default DataFetching;
