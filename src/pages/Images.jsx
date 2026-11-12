import { useEffect, useState } from 'react';

function Images() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if (!response.ok) {
          throw new Error('Could not load photos. Please try again later.');
        }
        const data = await response.json();
        setPhotos(data);
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
      <h1>Images</h1>
      {loading && <p role="status">Loading photos...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && (
        <div className="grid">
          {photos.map((photo) => (
            <article className="card" key={photo.id}>
                <img src={photo.url} alt={photo.title} loading="lazy" />
                <h2>{photo.title}</h2>
            </article>
          ))}
        </div>
      )}
    </>
  );
}

export default Images;
