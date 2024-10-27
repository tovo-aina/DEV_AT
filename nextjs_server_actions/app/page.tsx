import { getAllPosts } from "@/actions/postActions";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

async function Home() {
  const { posts } = await getAllPosts();

  return (
    <div>
      <h1>NextJS 14 Server Actions + MongoDB(Mongoose)</h1>
      <h2>C.R.U.D + Sort = Search + Pagination</h2>

      <PostForm />

      {posts && <PostList posts={posts} />}
    </div>
  );
}

export default Home;
