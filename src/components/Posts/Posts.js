import React from "react";
import Post from "../Post/Post";

const Posts = ({
  setModal,
  setBlogItems,
  blogItems,
  setTitle,
  setCategory,
  setContent,
  setEditId,
}) => {
  const editBlogHandler = (id) => {
    const editData = blogItems.find((item) => item.id === id);
    console.log(editData);
    setModal(true);
    setTitle(editData.title);
    setCategory(editData.category);
    setContent(editData.content);
    setEditId(id);
  };
  const deleteBlogHandler = (id) => {
    const newData = blogItems.filter((item) => item.id !== id);
    setBlogItems(newData);
  };

  return (
    <>
      {blogItems.length ? (
        blogItems?.map((item) => (
          <Post
            title={item.title}
            content={item.content}
            category={item.category}
            key={item.id}
            id={item.id}
            editBlogHandler={editBlogHandler}
            deleteBlogHandler={deleteBlogHandler}
          />
        ))
      ) : (
        <div className="flex">
          <h1 style={{ color: "red", margin: "" }}>
            No blog found. Please add a blog
          </h1>
        </div>
      )}
    </>
  );
};

export default Posts;
