import BlogDetails from "@/components/ui/BlogDetails";
import { Blog } from "@/types";

interface BlogId {
  params: {
    blogId: string;
  };
}

//* generateStaticParams function er maddome bole dete parbo kun kun single data gulu ssg (server e age e er html file creat kore rakbe). aikhane 1st 3 ta ssg korese
//* ai function er nam 'generateStaticParams' e dete hobe
export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: Blog) => ({
    blogId: blog.id,
  }));
};

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
