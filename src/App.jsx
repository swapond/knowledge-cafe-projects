import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  // We have to use bookmark functionality here
  // Because from here we have common Code.
  // Bookmark btn is in blog component and both in this file is common
  // so we declare here

  const [bookmarks, setbookmarks] = useState([]);
  const handleAddToBookmark = (blog) => {
    // bookmarks is immutable, so we have to create a new array using spread operator

    const newBookmarks = [...bookmarks, blog];
    setbookmarks(newBookmarks);
  };

  return (
    <>
      <Header></Header>
      <div className="container px-4 mx-auto md:flex justify-between">
        {/* We send the function  handleAddToBookmark to blogs cause it child components blog hold the bookmark btn*/}
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
