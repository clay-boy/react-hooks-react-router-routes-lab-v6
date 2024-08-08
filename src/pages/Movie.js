import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({ title: "", time: 0 }); // Initialize with expected structure
  const { id: movieId } = useParams();

  useEffect(() => {
    if (movieId) { // Ensure movieId is available before making the fetch call
      fetch(`http://localhost:4000/movies/${movieId}`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then(data => setMovie(data))
        .catch(err => console.error('Fetch error:', err)); // Improved error handling
    }
  }, [movieId]); // Add movieId as a dependency to re-fetch if it changes

  if (!movie.title) {
    return <p>Loading...</p>; // Show a loading message while the movie data is being fetched
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time} minutes</p>
      </main>
    </>
  );
}

export default Movie;
