import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import API from "../services/api";

function PostDetails() {
  const { id } =
    useParams();

  const [post, setPost] =
    useState(null);

  const [comments, setComments] =
    useState([]);

  const [text, setText] =
    useState("");

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, []);

  const fetchPost =
    async () => {
      try {
        const res =
          await API.get(
            "/posts"
          );

        const foundPost =
          res.data.find(
            (p) =>
              p._id === id
          );

        setPost(
          foundPost
        );

      } catch (error) {
        console.log(error);
      }
    };

  const fetchComments =
    async () => {
      try {
        const res =
          await API.get(
            `/comments/${id}`
          );

        setComments(
          res.data
        );

      } catch (error) {
        console.log(error);
      }
    };

  const addComment =
    async () => {
      try {

        if (!text.trim()) {
          alert(
            "Enter a comment"
          );
          return;
        }

        await API.post(
          "/comments",
          {
            postId: id,
            text,
          }
        );

        setText("");

        fetchComments();

      } catch (error) {
        alert(
          error.response?.data
            ?.message ||
            "Failed to add comment"
        );
      }
    };

  if (!post)
    return <h2>Loading...</h2>;

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "30px auto",
      }}
    >
      <h1>
        {post.title}
      </h1>

      <p>
        {post.content}
      </p>

      <h3>
        Author:
        {" "}
        {post.author?.name}
      </h3>

      <hr />

      <h2>
        Comments
      </h2>

      <textarea
        rows="3"
        value={text}
        placeholder="Write a comment..."
        onChange={(e) =>
          setText(
            e.target.value
          )
        }
        style={{
          width: "100%",
          marginBottom:
            "10px",
        }}
      />

      <button
        onClick={
          addComment
        }
      >
        Add Comment
      </button>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        {comments.map(
          (comment) => (
            <div
              key={
                comment._id
              }
              style={{
                border:
                  "1px solid #ddd",
                padding:
                  "10px",
                marginBottom:
                  "10px",
              }}
            >
              <strong>
                {
                  comment.user
                    ?.name
                }
              </strong>

              <p>
                {
                  comment.text
                }
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default PostDetails;