import { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Could not load posts. Please try again later.');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>Posts</h1>
      {loading && <p role="status">Loading posts...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && (
        <div className="grid">
          {posts.map((post) => (
            <article className="card" key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </article>
          ))}
        </div>
      )}
    </>
  );
}

export default Posts;
