import React, { useState } from "react";
import "./App.css";
import Data from "./blog.json";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

function App() {
  const [blogItems, setBlogItems] = useState(Data);
  const [modal, setModal] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const [editId, setEditId] = useState("");

  return (
    <>
      <div className="header">
        <button className="btn btn-link">Back to Post</button>
        <button className="btn btn-primary" onClick={() => setModal(true)}>
          New Post
        </button>
      </div>

      {modal ? (
        <div className="modal-overlay">
          <div className="modal">
            <Form
              blogItems={blogItems}
              setBlogItems={setBlogItems}
              setModal={setModal}
              title={title}
              setTitle={setTitle}
              category={category}
              setCategory={setCategory}
              content={content}
              setContent={setContent}
              editId={editId}
              setEditId={setEditId}
            />
          </div>
        </div>
      ) : (
        <div className="posts">
          <Posts
            blogItems={blogItems}
            setBlogItems={setBlogItems}
            setModal={setModal}
            setTitle={setTitle}
            setCategory={setCategory}
            setContent={setContent}
            setEditId={setEditId}
          />
        </div>
      )}
    </>
  );
}

export default App;
