import React, { useState } from "react";

const Post = ({
  id,
  title,
  content,
  category,
  editBlogHandler,
  deleteBlogHandler,
}) => {
  const [like, setLike] = useState("");
  const likeHandler = () => {
    setLike(!like);
  };
  return (
    <div className="post">
      <div className="post__title">{title}</div>
      <div className="post__content">{content}</div>
      <div className="post__footer">
        <span className="post__category">#{category}</span>
        <div className="post__btns">
          <button
            className={like ? "btn btn-red" : "btn btn-card"}
            onClick={likeHandler}
          >
            {like ? "🤍" : "❤️"}
          </button>
          <button className="btn btn-card" onClick={() => editBlogHandler(id)}>
            edit
          </button>
          <button
            className="btn btn-card"
            onClick={() => deleteBlogHandler(id)}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
