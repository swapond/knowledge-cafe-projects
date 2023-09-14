import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h3 className=" text-2xl text-center font-bold">Knowledge Cafe </h3>
    </div>
  );
};

export default Blogs;
