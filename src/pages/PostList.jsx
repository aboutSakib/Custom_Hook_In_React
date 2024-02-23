import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const PostList = () => {
  const {
    data: posts,
    loding,
    error,
  } = useFetch([], `https://jsonplaceholder.typicode.com/posts?_limit=10`);
  return (
    <div>
      <h2>All Post...</h2>
      {loding && <h2>Loading......</h2>}
      {error && <h2>{error}</h2>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
