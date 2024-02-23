import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams();
  console.log(useParams());
  console.log(postId);
  // const {
  //   data: post,
  //   loading,
  //   error,
  // } = useFetch(null, `https://jsonplaceholder.typicode.com/posts/${postId}`);

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      {/* <h2>Post Details of id - {post?.id}</h2>
      <p>The title of the post - {post?.title}</p>
      <p>The Description - {post?.body}</p> */}
    </div>
  );
};

export default PostDetails;
