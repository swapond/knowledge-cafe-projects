import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  console.log(handleAddToBookmark);

  return (
    <div className="md:w-2/3">
      <h3 className=" text-2xl text-center font-bold">
        Newly arrived blogs: {blogs.length}
      </h3>

      <div className="grid lg:grid-cols-3">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleAddToBookmark={() => handleAddToBookmark(blog)}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
