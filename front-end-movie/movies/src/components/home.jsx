import HandleHomeCopy from "../common/pageHeader";
import { useState, useEffect } from "react";
import MovieCard from "./moviesCards";
import "../App.css";

const Home = ({ data }) => {
  return (
    <>
      <HandleHomeCopy
        title="Movie App"
        description="for more movies log into our free account"
      />
      <div className="container">
        <div className="grid">
          {data.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
