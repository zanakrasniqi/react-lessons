import { useEffect, useState } from 'react';

function Home() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const commentsResponse = await fetch('https://jsonplaceholder.typicode.com/comments');
        const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos');

        if (!postsResponse.ok || !commentsResponse.ok || !photosResponse.ok) {
          throw new Error('Could not load the totals. Please try again later.');
        }

        setPosts(await postsResponse.json());
        setComments(await commentsResponse.json());
        setPhotos(await photosResponse.json());
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
      <h1>Home</h1>
      <p>Explore posts, comments, and photos from JSONPlaceholder.</p>
      {loading && <p role="status">Loading totals...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && (
        <div className="grid stats">
          <div className="card"><h2>Posts</h2><p className="total">{posts.length}</p></div>
          <div className="card"><h2>Comments</h2><p className="total">{comments.length}</p></div>
          <div className="card"><h2>Photos</h2><p className="total">{photos.length}</p></div>
        </div>
      )}
    </>
  );
}

export default Home;
