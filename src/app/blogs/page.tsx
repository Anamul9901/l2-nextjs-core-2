"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/types";

const BlogsPage = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store", // build time e create korbe nah. prote user er request e new kore build hobe
  // });
  // const blogs = await res.json();

  const { data: blogs, isLoading, isError, error } = useGetBlogsQuery("");
  console.log(blogs);
  return (
    <div className="w-[90%] mx-auto ">
      <h1 className="text-4xl text-center my-5">
        All Blogs From <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        Dive into the{" "}
        <i>
          fascinating world of quantum computing, where unlocking unprecedented
          computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-4 my-10">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
