import { useEffect, useState } from 'react';

function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        if (!response.ok) {
          throw new Error('Could not load comments. Please try again later.');
        }
        const data = await response.json();
        setComments(data);
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
      <h1>Comments</h1>
      {loading && <p role="status">Loading comments...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && (
        <div className="grid">
          {comments.map((comment) => (
            <article className="card" key={comment.id}>
                <h2>{comment.name}</h2>
                <p className="email">{comment.email}</p>
                <p>{comment.body}</p>
            </article>
          ))}
        </div>
      )}
    </>
  );
}

export default Comments;
