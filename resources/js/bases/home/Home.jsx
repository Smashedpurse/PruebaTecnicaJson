import "./Home.css";
import { PostList } from "../PostList/PostList";
import PostForm from "../PostForm/PostForm";



export const Home = () => {
  return (
    <>
      <PostList />

      <PostForm/>
    </>
  )
}
