import { useEffect, useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import MovieCard from "./moviesCards";

const SearchBarMovies = ({ data }) => {
  useEffect(() => {}, [data]);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState([]);
  const searchMovie = async (e) => {
    e.preventDefault();

    const URL_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=97078127fca4b1bc3b367f36b1cc98f4&query=${searchInput}`;
    const resolve = await fetch(URL_SEARCH);
    const resolveData = await resolve.json();
    setSearch(resolveData.results);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Form
          className="d-flex w-50 mt-5 justify-content-center"
          onSubmit={searchMovie}
        >
          <FormControl
            type="search"
            placeholder="search your favorite movie"
            aria-label="search"
            className="me-2"
            name="search"
            value={searchInput}
            onChange={handleChange}
          ></FormControl>
          <Button variant="secondary" type="submit">
            search
          </Button>
        </Form>
      </div>
      <div className="container">
        <div className="grid">
          {search.length !== 0
            ? search.map((movie) => {
                return <MovieCard key={movie.id} {...movie} />;
              })
            : data.map((movie) => {
                return <MovieCard key={movie.id} {...movie} />;
              })}
        </div>
      </div>
    </>
  );
};

export default SearchBarMovies;
