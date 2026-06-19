import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="section">
          <h2>Loading...</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="section">
        <h1 className="section-title">
          Explore Blogs
        </h1>

        {posts.length === 0 ? (
          <div className="blog-card">
            <div className="blog-content">
              <h2 className="blog-title">
                No Posts Yet 🚀
              </h2>

              <p className="blog-desc">
                Create your first blog post.
              </p>
            </div>
          </div>
        ) : (
          posts.map((post) => (
            <div
              key={post._id}
              className="blog-card"
            >
              <div className="blog-content">
                <Link
                  to={`/post/${post._id}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <h2 className="blog-title">
                    {post.title}
                  </h2>
                </Link>

                <p className="blog-desc">
                  {post.content
                    ? `${post.content.substring(
                        0,
                        150
                      )}...`
                    : "No content available"}
                </p>

                <div className="blog-footer">
                  <small>
                    Author:{" "}
                    {post.author?.name ||
                      "Unknown"}
                  </small>

                  <small>
                    5 min read
                  </small>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Home;