import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PostDetails from "../pages/PostDetails";
import PostList from "../pages/PostList";
import Root from "../pages/Root";
export const ourRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", index: true, element: <Home /> },
      { path: "/posts", element: <PostList /> },
      { path: "/posts/:postId", element: <PostDetails /> },
    ],
  },
]);
