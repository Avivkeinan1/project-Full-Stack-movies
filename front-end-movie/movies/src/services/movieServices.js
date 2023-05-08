import httpService from "./httpServices";

export const saveMovieDataToDb = (movieData) => {
  return httpService
    .post("/movies/saveMovie", movieData)
    .then((response) => {
      console.log("Movie saved successfully", response.data);
    })
    .catch((error) => {
      console.error("Failed to save movie", error);
    });
};

export async function deleteChosenMovie(id) {
  return await httpService.delete(`/movies/delete/${id}`);
}
