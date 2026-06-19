import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate =
    useNavigate();

  const [title, setTitle] =
    useState("");

  const [content, setContent] =
    useState("");

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        await API.post(
          "/posts",
          {
            title,
            content,
          }
        );

        alert(
          "Post Created Successfully 🎉"
        );

        navigate("/");

      } catch (error) {
        alert(
          error.response?.data
            ?.message ||
            "Failed to create post"
        );
      }
    };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "30px auto",
      }}
    >
      <h1>Create Blog Post</h1>

      <form
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) =>
            setTitle(
              e.target.value
            )
          }
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom:
              "15px",
          }}
        />

        <textarea
          rows="10"
          placeholder="Write your content..."
          value={content}
          onChange={(e) =>
            setContent(
              e.target.value
            )
          }
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom:
              "15px",
          }}
        />

        <button
          type="submit"
        >
          Publish Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;