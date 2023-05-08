const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  poster_path: {
    type: String,
    required: false,
  },
  vote_average: {
    type: String,
    required: true,
  },
  release_date: {
    type: Date,
    default: Date.now,
  },
  overview: {
    type: String,
    required: true,
  },
  movie_id: {
    type: String,
    required: false,
  },
  user_id: {
    type: String,
    ref: "User",
    required: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema, "Movies");

module.exports = Movie;
