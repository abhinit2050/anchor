import { useCreatePostMutation, useGetPostsQuery } from "../services/api";


function Posts() {

    console.log("Component rendered");

    const {data, isLoading, error} = useGetPostsQuery();
    const { data: postsAgain } = useGetPostsQuery();
    const [createPost] = useCreatePostMutation();

    if (isLoading) return <p>Loading...</p>

  if (error) return <p>Error loading posts</p>

  return (
    <>
     <button onClick={()=>createPost({
        title:"Naya post",
        body:"Created from RTK Query",
        userId:1
    })}>
        Add Post
    </button>

    <div>
      {data?.slice(-5).map((post: any) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
    <p>Second hook posts length: {postsAgain?.length}</p>
   
    </>
  )

}

export default Posts;
