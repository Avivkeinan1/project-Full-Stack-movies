import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteChosenMovie } from "../services/movieServices";

const DeleteMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const deleteMovie = async () => {
      try {
        await deleteChosenMovie(id);
        navigate("/saveMovies");
      } catch {}
    };
    deleteMovie();
  }, []);
  return null;
};

export default DeleteMovie;
