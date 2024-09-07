import BlogDetails from "@/components/ui/BlogDetails";

interface BlogId {
  params: {
    blogId: string;
  };
}

const BlogDetailsPage = async ({ params }: BlogId) => {
  //   console.log(params);
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store", // aikhane data cash kore rakha jabe nah. karon single data er khetre user er request e data deky 
  });
  const blog = await res.json();
  console.log(blog);
  return (
    <div className="my-10">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
