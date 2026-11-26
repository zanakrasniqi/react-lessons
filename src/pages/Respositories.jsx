import { useState, useEffect } from "react";
import RepoCard from "../components/RepoCard";

function Repositories() {
  const [username, setUsername] = useState("ZanaKrasniqi");
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  const getRepos = () => {
    setError(null);

    fetch(`https://api.github.com/users/${username}/repos?per_page=30`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status}`);
        }
        return res.json();
      })
      .then(setRepos)
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div>
      <h1>Find repos</h1>

      <div className="search">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={getRepos}>Search</button>
      </div>

      {error && <p>{error}</p>}

      <div className="repo-grid">
        {repos.map((repo) => (
          <RepoCard repo={repo} key={repo.id} />
        ))}
      </div>
    </div>
  );
}

export default Repositories;
