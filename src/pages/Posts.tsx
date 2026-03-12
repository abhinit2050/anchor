import { useGetPostsQuery } from "../services/api";


function Posts() {

    console.log("Component rendered");
    
    const {data, isLoading, error} = useGetPostsQuery();

    if (isLoading) return <p>Loading...</p>

  if (error) return <p>Error loading posts</p>

  return (
    <div>
      {data?.slice(0,5).map((post: any) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  )

}

export default Posts;
