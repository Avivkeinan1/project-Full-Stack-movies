import { useState, useEffect } from "react";
import { getMyFavoriteMovies } from "../services/userServices";
import HandleHomeCopy from "../common/pageHeader";
import MovieCard from "./moviesCards";

const SaveMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMyFavoriteMovies();
        const movieData = data.response;

        const uniqueMovies = [];
        movieData.forEach((movie) => {
          if (!uniqueMovies.find((m) => m.title === movie.title)) {
            uniqueMovies.push(movie);
          }
        });

        setMovies(uniqueMovies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <HandleHomeCopy title="You can watch all your favorite movies here " />
      <div className="container">
        <div className="grid">
          {!movies?.length ? (
            <p className="text-light">No Movies Yet...</p>
          ) : (
            movies.map((movie) => {
              return <MovieCard key={movie._id} {...movie} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default SaveMovies;
