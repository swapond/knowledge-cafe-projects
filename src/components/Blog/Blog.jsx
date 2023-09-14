import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const {
    cover,
    title,
    authorImg,
    authorName,
    postedTime,
    readingTime,
    hashtags,
  } = blog;

  return (
    <>
      <div className="container mx-auto mt-8 p-4 bg-white rounded shadow-lg">
        <img
          src={cover}
          alt={title}
          className="w-full h-auto rounded-lg mb-4"
        />
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="flex items-center mt-2">
          <img src={authorImg} alt="#" className="w-8 h-8 rounded-full" />
          <p className="text-gray-700 text-sm ml-2">{authorName}</p>
        </div>
        <p className="text-gray-500 text-sm mt-1">
          {postedTime} • {readingTime} min read
        </p>
        <div className="mt-4">
          <ul className="flex">
            {hashtags.map((hashtag, index) => (
              <li className="pr-2 text-gray-600" key={index}>
                #<a href="">{hashtag}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

Blog.propTypes = {
  blog: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authorImg: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    postedTime: PropTypes.string.isRequired,
    readingTime: PropTypes.number.isRequired, // Assuming readingTime is a number
    hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Blog;
