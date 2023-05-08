const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");
const authMW = require("../middleware/auth");

router.get("/user/:userId", authMW, async (req, res) => {
  try {
    const movies = await Movie.find({ userId: req.params._id });
    res.send({ success: true, response: movies });
  } catch (error) {
    res.status(500).send({ success: false, message: "Server error" });
  }
});

router.post("/saveMovie", authMW, async (req, res) => {
  const movieData = req.body;

  try {
    const newMovie = new Movie(movieData);

    const savedMovie = await newMovie.save();
    res.status(200).send(savedMovie);
  } catch (err) {
    res.status(500).send({ error: "Failed To Save Movie" });
  }
});
router.delete("/delete/:id", authMW, async (req, res) => {
  const movie = await Movie.findOneAndRemove({
    _id: req.params.id,
  });
  if (!movie)
    return res
      .status(404)
      .send("The user card with the given ID was not found.");

  res.send(movie);
});
module.exports = router;
