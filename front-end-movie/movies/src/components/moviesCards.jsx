import { useState } from "react";
import { Button, Modal, ModalTitle } from "react-bootstrap";
import { saveMovieDataToDb } from "../services/movieServices";
import { Link } from "react-router-dom";

const imgUrl = "https://image.tmdb.org/t/p/w500";
const MovieCard = ({
  title,
  poster_path,
  release_date,
  vote_average,
  overview,
  id: user_id,
  _id,
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const handleSaveMovie = () => {
    saveMovieDataToDb({
      title,
      poster_path,
      release_date,
      vote_average,
      overview,
      user_id,
      _id,
    });
  };

  return (
    <div className="card text-center bg-secondary mb-3">
      <div className="card body">
        <img className="card-img-top" src={imgUrl + poster_path} />
        <div className="card body">
          <button type="button" className="btn btn-dark" onClick={handleShow}>
            view more
          </button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton style={{ backgroundColor: "#4A4742" }}>
              <Modal.Title>
                <h1 style={{ color: "#660300" }}>{title}</h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#4A4742" }}>
              <img
                className="card-img-top"
                style={{ width: "14rem" }}
                src={imgUrl + poster_path}
              />
              <h3 style={{ color: "#660300" }}>{title}</h3>
              <h4>ImDb: {vote_average}</h4>
              <h5 style={{ color: "#660300" }}>Release Date {release_date}</h5>
              <br />
              <h6 style={{ color: "#660300" }}>overview</h6>
              <p>{overview}</p>
              <p style={{ width: "5em", marginTop: "20px" }}>
                <button
                  type="button"
                  className="btn "
                  onClick={handleSaveMovie}
                >
                  <i style={{ color: "red" }} className="bi bi-heart-fill"></i>
                </button>
                <Link
                  style={{ color: "#660300" }}
                  to={`/movies/delete/${_id}`}
                  className="card-link"
                >
                  Delete
                </Link>
              </p>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: "#4A4742" }}>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
