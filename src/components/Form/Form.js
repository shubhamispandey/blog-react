import React, { useState } from "react";

const Form = ({
  blogItems,
  setBlogItems,
  setModal,
  title,
  setTitle,
  category,
  setCategory,
  content,
  setContent,
  editId,
  setEditId,
}) => {
  const clearInputs = () => {
    setTitle("");
    setContent("");
    setCategory("");
  };

  const handleAddBlog = (e) => {
    e.preventDefault();
    if (editId) {
      setBlogItems(
        blogItems.map((item) => {
          if (item.id === editId) {
            return {
              ...item,
              title: title,
              category: category,
              content: content,
            };
          }
          return item;
        })
      );
      setEditId("");
    } else {
      const newData = {
        id: new Date().getTime().toString(),
        title: title,
        category: category,
        content: content,
      };
      const updatedTodoItems = [...blogItems, newData];
      setBlogItems(updatedTodoItems);
    }

    clearInputs("");
    setModal(false);
  };

  return (
    <>
      <form>
        <h1 style={{ marginBottom: "15px", textDecoration: "underline" }}>
          {editId ? "Edit the blog" : "Add the blog"}
        </h1>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Eg: Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            placeholder="Eg: Javascript"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <input
            type="text"
            id="content"
            placeholder="Eg: Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="form-btn-group">
          <button className="btn btn-success" onClick={handleAddBlog}>
            Add a Post
          </button>
          <button className="btn btn-grey" onClick={() => setModal(false)}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
